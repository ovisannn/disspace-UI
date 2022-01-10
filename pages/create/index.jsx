import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";
import axios from "axios";

function upload() {
  const [state, setState] = useState({});
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage =  (e) => {
    if (image === undefined) return;
    const storageRef = ref(storage, `/images/${image?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("Image Url:", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    if (url) {
      handleCreate()
    }
  }, [url])

  const handleCreate = async (e) => {
    try {
      const response = await axios.post("http://localhost:8080/v1/threads", {
        title: state?.title,
        content: state?.content,
        image_url: url,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadImage()
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Upload Image</label>
          <input
            type="file"
            className="mb-2"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <label className="block">Title</label>
          <input
            className="border-2 border-orange px-1.5"
            type="text"
            name="title"
            id="title"
            placeholder="Thread's title..."
            onChange={onChange}
          />
        </div>
        <div>
          <label className="block">Content</label>
          <textarea
            className="border-2 border-orange px-1.5"
            name="content"
            id="content"
            placeholder="Start writing..."
            onChange={onChange}
          />
        </div>
        <button
          className="bg-lightOrange hover:bg-orange text-white font-bold py-2 px-10 rounded-full"
          onClick={handleSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default upload;
