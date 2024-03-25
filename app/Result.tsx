export function ResultBox({ simplifiedText }: { simplifiedText?: string }) {
  return (
    <div className="result rounded-md">
      {simplifiedText ? (
        <p>{simplifiedText}</p>
      ) : (
        <p>変換結果がここに表示されます。</p>
      )}
    </div>
  );
}
