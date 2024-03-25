"use server";
import prisma from "@/app/lib/prisma";

export const addText = async (formData: FormData) => {
  const text = formData.get("inputText") as string;
  if (!text) {
    return { error: "Please enter some text to process." };
  }

  await prisma.texts.create({
    data: {
      text: text,
    },
  });
  console.log("Processing text:", text);
  // Process the text and return the result
  return { text };
};
