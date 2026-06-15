import { useState, type ChangeEvent, type FormEvent } from "react";
import { type ITodo } from "../../types/ITodo";

interface ITodoAddProps {
    add: (deed: ITodo) => void;
}

export default function TodoAdd(props: ITodoAddProps) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");

    const handleImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const cFiles = evt.target.files;
        if (cFiles && cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result as string);
            }
            fileReader.readAsDataURL(cFiles[0]);
        } else {
            setImage("");
        }
    }

    const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const newDeed: ITodo = {
            title,
            desc,
            image,
            done: false,
            createdAt: new Date().toISOString(),
            key: Date.now(),
        }
        const date = new Date();
        newDeed.createdAt = date.toLocaleString();
        newDeed.key = date.getTime();
        props.add(newDeed);
        evt.currentTarget.reset();
    }

    const handleFormReset = () => {
        setTitle("");
        setDesc("");
        setImage("");
    };

    return (
        <section>
            <h1>Создание нового дела</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Заголовок</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Примечание</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Примечание" value={desc} onChange={e => setDesc(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
                            <span className="file-cta">
                                <span className="file-label">Графическая иллюстрация</span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="Сбросить" />
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="Создать" />
                    </div>
                </div>
            </form>
        </section>
    )
}