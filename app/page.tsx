"use client";

import { MicrophoneIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAAoIm5yyPf4dBHH0Dk56AZ5_oXqR_hueA",
  authDomain: "ai-ml-marvel-tam-vit-2023.firebaseapp.com",
  projectId: "ai-ml-marvel-tam-vit-2023",
  storageBucket: "ai-ml-marvel-tam-vit-2023.appspot.com",
  messagingSenderId: "873705683113",
  appId: "1:873705683113:web:438d133ecc0eb7021711b8",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleUploadAudioClick = () => {
    fileInputRef.current?.click();
  };

  const handleTextChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((e.target as HTMLFormElement)?.["prompt"].value) {
      axios
        .get(
          `http://127.0.0.1:8000/api/v1/text/assist?prompt=${
            (e.target as HTMLFormElement)["prompt"].value
          }`
        )
        .then((res) => {
          setMessage(res.data.message);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const storageRef = ref(storage, "some-child");

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, e.target.files?.[0]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          axios
            .get(`http://127.0.0.1:8000/api/v1/audio/assist?audio_url=${url}`)
            .then((res) => {
              setMessage(res.data.message);
            })
            .catch((error) => console.log(error));
        });
      });
    }
  };

  return (
    <div className="w-full h-screen p-8 flex flex-col items-center gap-8 text-white bg-gray-900">
      <div className="space-y-2">
        <h1 className="text-4xl text-center font-bold">LawLLaMa</h1>
        <p className="text-2xl text-center font-medium">
          Your <span className="text-blue-500">AI Handbook</span> for Indian
          Law.
        </p>
      </div>

      <div className="w-full max-w-lg flex flex-col items-center gap-4">
        <form onSubmit={handleTextChange} className="w-full space-y-2">
          <textarea
            rows={10}
            placeholder="Enter Your Query"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none"
          />
          <button className="w-full p-4 font-medium bg-blue-500 rounded-lg">
            Ask LawLLama
          </button>
        </form>

        <div className="w-full flex items-center gap-2">
          <span className="w-full h-2 bg-gray-800" />
          <span className="text-xl text-gray-500">OR</span>
          <span className="w-full h-2 bg-gray-800" />
        </div>

        <input
          ref={fileInputRef}
          type="file"
          onChange={handleAudioFileChange}
          className="hidden"
        />
        <button
          onClick={handleUploadAudioClick}
          className="w-full p-4 flex items-center justify-center gap-2 text-black font-medium bg-yellow-300 rounded-lg"
        >
          <MicrophoneIcon className="w-5 h-5" />
          <span>Upload Audio</span>
        </button>
      </div>

      {message && (
        <div className="w-full max-w-lg space-y-2">
          <span className="">Output:</span>
          <textarea
            rows={10}
            defaultValue={message}
            disabled
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none"
          />
        </div>
      )}
    </div>
  );
}
