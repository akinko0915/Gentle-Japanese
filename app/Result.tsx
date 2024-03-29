export function ResultBox({ result }: { result?: string }) {
  return (
    <div className="result rounded-md">
      {result ? <p>{result}</p> : <p>変換結果がここに表示されます。</p>}
    </div>
  );
}
