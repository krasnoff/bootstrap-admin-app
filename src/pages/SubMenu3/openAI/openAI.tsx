import { Configuration } from 'openai';
import { OpenAIApi } from 'openai/dist/api';
import { useState } from 'react';
import styles from '../openAI.module.scss';

export default function OpenAI() {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 100,
            });
            setResult(response.data.choices[0].text as string);
        } catch (error) {
            console.error('error', error);
        }
        setLoading(false);
    }
    
    return (
        <div className="main">
            <div className="w-2/4 mx-auto">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="write a prompt..."
                    className="textarea"
                ></textarea>

                <button
                    onClick={handleClick}
                    disabled={loading || prompt.length === 0}
                    className="btn"
                >
                    {loading ? 'generating' : 'generate'}
                </button>

                <pre className="result">{result}</pre>
            </div>
        </div>
    );
}