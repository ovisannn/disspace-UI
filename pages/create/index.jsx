import { useState, useEffect, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";
import { BsCardImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import axios from "axios";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { currentUser } from "../../dummyData";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function upload() {
  const [state, setState] = useState({});
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const [catList, setCatList] = useState();
  const [cat, setCat] = useState("");
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");

  const reference = useRef();

  // Start Text Editor Customization
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: ["", "center", "right", "justify"] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  // End Text Editor Customization

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
    reference.current.value = "";
    setImage("");
    setPreview("");
  };

  // Start Image Upload Logic
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
  // End Image Upload Logic

  useEffect(() => {
    if (url) {
      handleCreate();
    }
  }, [url]);

  const handleCreate = async (e) => {
    try {
      const response = await axios.post("http://localhost:8080/v1/threads", {
        title: state?.title,
        content: content,
        image_url: url,
        category_id: cat,
        user_id: currentUser?._id,
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
      <form
        className="h-auto grid grid-cols-9 lg:mb-40 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="col-span-9 md:col-span-5 md:col-start-2 px-6 lg:px-0">
          <div className="h-100 flex flex-row items-center border border-gray p-3 lg:mt-9 mt-5 rounded">
            <img
              src={currentUser?.profile_pict}
              alt="user-profile"
              height={40}
              width={40}
              className="mr-4 rounded-full"
            />
            <div className="font-semibold">{currentUser?.full_name}</div>
          </div>
          <div className="md-flex items-center mt-2">
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
          <div className="border border-gray mt-5 rounded">
            <div className="py-2 flex justify-center items-center">
              <input
                type="file"
                name="upload"
                id="upload"
                onChange={onImageChange}
                style={{ display: "none" }}
                ref={reference}
              />
              <label
                htmlFor="upload"
                className="hover:bg-gray rounded-full p-2"
              >
                {" "}
                <span>
                  <BsCardImage
                    size={22}
                    color="gray"
                    className="inline-block absolute"
                  />
                  <div className="inline-block ml-7 text-grayTxt text-opacity-80">
                    Add Thread Cover
                  </div>
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
          <div>
            <div className="w-full flex flex-col mt-5">
              <div className="bg-orange w-full border-orange h-10 rounded-t"></div>
              <div className="border border-gray rounded-b hover:border-orange">
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  placeholder="Start writing!"
                />
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
            className="bg-lightOrange hover:bg-orange text-white font-semibold py-2 rounded w-full mt-5 mb-1"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default upload;
