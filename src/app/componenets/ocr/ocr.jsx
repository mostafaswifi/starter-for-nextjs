'use client';

import { useEffect, useState, useRef } from 'react';
import Tesseract, { createWorker } from 'tesseract.js';

export default function ArabicOCR() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [workerReady, setWorkerReady] = useState(false);
  const workerRef = useRef(null);

  useEffect(() => {
    // Initialize worker with Arabic language support
    const initWorker = async () => {
      const worker = await createWorker('ara');
      workerRef.current = worker;
      setWorkerReady(true);
    };

    initWorker();

    // Cleanup
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !workerRef.current) return;

    setLoading(true);
    try {
      const { data: { text } } = await workerRef.current.recognize(file);
      setText(text);
    } catch (error) {
      console.error('OCR failed:', error);
      setText('Failed to recognize Arabic text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>Worker status: {workerReady ? '✅ Ready' : '⏳ Loading Arabic language data...'}</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} disabled={loading || !workerReady} />
      {loading && <p>Processing...</p>}
      {text && <pre dir="rtl">{text}</pre>}
    </div>
  );
}