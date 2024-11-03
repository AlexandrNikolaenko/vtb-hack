import { H4, WhiteP } from "./Text";
import { LittleP } from "./Text";

export default function Graphic({name, desc}) {
    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-2.5 p-2.5 bg-blue">
                <WhiteP className={'text-white'} text={name} />
                <LittleP text={desc} className="text-white"/>
            </div>
            <div className="bg-contain bg-no-repeat bg-center w-full h-[178px]" style={{backgroundImage: `url('/graphic.svg')`}}></div>
        </div>
    )
}