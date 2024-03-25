"use client";

async function convert(formData: FormData) {
  "use server";
  const text = formData.get("inputText") as string;
  if (!text) {
    return { error: "Please enter some text to process." };
  }

  console.log("Processing text:", text);
  // Process the text and return the result
  return { text };
}

export default function Form() {
  return (
    <form action={convert} className="flex flex-col items-center mr-4">
      <textarea
        name="inputText"
        className="mb-4 rounded-md"
        placeholder="日本語を入力してください"
        // disabled={pending}
      ></textarea>
      <button
        type="submit"
        className="button rounded-lg border border-transparent px-5 py-4"
        // disabled={pending}
      >
        <h2 className="text-xl font-semibold">へんかん！</h2>
      </button>
    </form>
  );
}
