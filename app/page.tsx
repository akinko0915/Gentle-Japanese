import { revalidatePath } from "next/cache";
import { ResultBox } from "./Result";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function processTextWithOpenAI(text: string): Promise<string> {
  // Process the text using the OpenAI API and return the result
  // ...
  const simplifiedText = text.toUpperCase();
  return simplifiedText;
}

async function convert(formData: FormData) {
  "use server";
  const text = formData.get("inputText") as string;
  if (!text) {
    return { error: "Please enter some text to process." };
  }

  console.log("Processing text:", text);
  // Process the text using the OpenAI API and return the result
  const result = await processTextWithOpenAI(text);

  const convertedText = await prisma.texts.create({
    data: {
      text: result,
    },
  });

  revalidatePath("/");
  return { result: convertedText.text };
}

export default async function Home() {
  const latestText = await prisma.texts.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const resultText = latestText?.text;

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
          <ResultBox simplifiedText={resultText} />
        </div>
      </div>
    </main>
  );
}
