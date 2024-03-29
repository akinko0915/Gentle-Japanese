"use client";

import { useState } from "react";
import { ResultBox } from "./Result";
import toUppercase from "./actions";

interface CommonActionsReturn {
  success: boolean;
  message: string;
  data: string;
}

export default function Home() {
  const convert = async (formData: FormData) => {
    const text: FormDataEntryValue | null = formData.get("inputText");

    const result: CommonActionsReturn = await toUppercase(text);

    if (result.success) {
      setResultText(result.data);
    } else {
      // エラー処理
    }
  };

  const [resultText, setResultText] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex flex-col place-items-center before:absolute">
        <h1 className="mb-6 text-3xl font-bold">やさしい日本語変換</h1>
        <p className="mb-6 text-lg font-bold">
          むずかしい日本語を、わかりやすく・よみやすい、やさしい日本語に変換します。
        </p>
        <div className="flex items-start">
          <form action={convert} className="flex flex-col items-center mr-4">
            <textarea
              name="inputText"
              className="mb-4 rounded-md"
              placeholder="日本語を入力してください"
            ></textarea>
            <button
              type="submit"
              className="button rounded-lg border border-transparent px-5 py-4"
            >
              <h2 className="text-xl font-semibold">へんかん！</h2>
            </button>
          </form>
          <ResultBox result={resultText} />
        </div>
      </div>
    </main>
  );
}
