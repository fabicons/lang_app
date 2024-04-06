import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';
import { FaCheck } from "react-icons/fa";

type WordObj = {
    word_es: string;
    word_en: string;
    grammatical_cat: string;
};

export default function WordCard({ wordObj }: { wordObj: WordObj }) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <h4>{wordObj.grammatical_cat}</h4>
                </CardHeader>
                <CardBody>
                    <h2>{wordObj.word_en}</h2>
                </CardBody>
                <CardFooter> 
                    <Button isIconOnly><FaCheck></FaCheck></Button>
                    <Button></Button>
                </CardFooter>
            </Card>
        </div>
    );
}
