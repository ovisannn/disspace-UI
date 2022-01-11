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

  const uploadImage = (e) => {
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
      handleCreate();
    }
  }, [url]);

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
    uploadImage();
  };

  return (
    <>
      <form
        className="h-auto grid grid-cols-9 text-center"
        onSubmit={handleSubmit}
      >
        <div className="col-span-9 md:col-span-5 md:col-start-2 px-6 lg:px-0">
          <div className="md-flex items-center mt-5">
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="title"
                id="title"
                className="border border-gray outline-none rounded focus:border-orange text-black mt-4 py-1.5 px-4"
                placeholder="Thread's title"
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-6">
              <div className="bg-orange w-full border-orange h-10 rounded-t"></div>
              <textarea
                name="content"
                id="content"
                className="border border-gray outline-none rounded-b focus:border-orange h-60 leading-none text-base py-3 px-4"
                placeholder="Start writing!"
                onChange={onChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-span-9 lg:col-span-2 mx-6 mt-5">
          <button
            type="button"
            className="bg-lightOrange hover:bg-orange text-white font-semibold py-2 rounded w-full"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default upload;
