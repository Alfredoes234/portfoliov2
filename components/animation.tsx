'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function ButtonRoll() {
    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container });
    const onClickGood = contextSafe(() => {
        let tl = gsap.timeline({ repeat: 0 });
        tl.to('.good', { rotation: 360 });
    });
    return (
        <div ref={container}>
            <button onClick={onClickGood} className="p-5 good">Goof</button>
        </div>
    );
}

function SubmitButton() {
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    const onClickGood = contextSafe(() => {
        let tl = gsap.timeline({ repeat: 0 })
            .to('.btn', { rotation: 360 });
    });

    return (
        <button className='btn'>
            spu
        </button>
    );
}


export { ButtonRoll, SubmitButton };