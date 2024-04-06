import data from '../../data.json';
import WordCard from '@/app/components/WordCard';

type WordObj = {
    word_es: string;
    word_en: string;
    grammatical_cat: string;
};
type WordArr = WordObj[];

export default function Home() {
    const wordArr = data as WordArr;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-2">
            {wordArr.map((wordObj, index) => (
                <div key={index} className=" flex gap-2">
                    <WordCard wordObj={wordObj} />
                </div>
            ))}
        </main>
    );
}
