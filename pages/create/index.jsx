import { useState, useEffect, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";
import { BsCardImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import axios from "axios";

function upload() {
  const [state, setState] = useState({});
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const [catList, setCatList] = useState();
  const [cat, setCat] = useState("");
  const [preview, setPreview] = useState(null);

  const ref = useRef();

  useEffect(() => {
    axios.get("http://localhost:8080/v1/categories").then((response) => {
      setCatList(response?.data);
    });
  }, []);

  const optionsCat = catList?.data?.map((obj) => {
    let newData = {};
    newData["value"] = obj._id;
    newData["label"] = obj.category_name;
    return newData;
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCat = (e) => {
    setCat(e.value);
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const clearImage = (e) => {
    ref.current.value = "";
    setImage("");
    setPreview("");
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
        category: cat,
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

  const catSelectStyle = {
    control: (styles, state) => ({
      ...styles,
      boxShadow: "none",
      borderColor: state.isFocused ? "#F8A978" : "#CED4DA",
      "&:hover": {
        borderColor: state.isFocused ? "#F8A978" : "#CED4DA",
      },
    }),
  };

  return (
    <>
      <form className="h-auto grid grid-cols-9" onSubmit={handleSubmit}>
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
              <div className="border border-gray rounded-b hover:border-orange">
                <textarea
                  name="content"
                  id="content"
                  className="border border-none outline-none w-full h-60 leading-none text-base py-3 px-4 resize-none"
                  placeholder="Start writing!"
                  onChange={onChange}
                ></textarea>
                <div>
                  <div className="ml-1.5 mb-1 w-10 h-10 hover:bg-gray rounded-full flex justify-center items-center">
                    <input
                      type="file"
                      name="upload"
                      id="upload"
                      onChange={onImageChange}
                      style={{ display: "none" }}
                      ref={ref}
                    />
                    <label htmlFor="upload">
                      {" "}
                      <span>
                        <BsCardImage
                          size={22}
                          color="gray"
                          className="h-full"
                        />
                      </span>
                    </label>
                  </div>
                  {preview ? (
                    <div className="flex justify-center">
                      <IoMdClose
                        color="white"
                        size={28}
                        className="absolute ml-32 -mt-3 bg-grayTxt hover:bg-black rounded-full p-1"
                        onClick={clearImage}
                      />
                      <img
                        src={preview}
                        alt="preview"
                        height={150}
                        className="ml-3 mb-2 rounded w-60"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 lg:col-span-2 mx-6 mt-9">
          <div className="border border-gray rounded">
            <div className="py-3 px-4">
              <label htmlFor="category" className="font-semibold">
                Choose a category
              </label>
              <Select
                options={optionsCat}
                name="category"
                placeholder="categories..."
                onChange={onChangeCat}
                styles={catSelectStyle}
                className="mt-1"
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-lightOrange hover:bg-orange text-white font-semibold py-2 rounded w-full mt-5"
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
