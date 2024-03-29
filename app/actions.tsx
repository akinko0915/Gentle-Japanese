// toUppercase.ts
"use server";

interface CommonActionsReturn {
  success: boolean;
  message: string;
  data: string;
}

export default async function toUppercase(
  text: FormDataEntryValue | null
): Promise<CommonActionsReturn> {
  // 実際の処理
  // Process the text using the OpenAI API and return the result
  if (!text)
    return {
      success: false,
      message: "Please enter some text to process.",
      data: "",
    };

  const _text: string = (text as string).toUpperCase();

  return { success: true, message: "success", data: _text };
}
