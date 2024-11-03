'use client'

import Link from "next/link";
import Image from "next/image";
import { NewLink } from "./Buttons";
import NewImage, { AchiveImage } from "./Images";
import { horisontalGradient } from "./gradientCss";
import { H5, H4, BaseP, H3} from "./Text";

export function Name() {
    let name = 'Александр';

    return (
        <h1 className="font-bold text-4xl text-white">{name}</h1>
    )
}

export function MyAccount() {
    let cond = 500;
     return (
        <div className="flex p-2.5 items-center rounded-base bg-white shadow-drop">
            <div className="flex flex-col gap-y-2 w-full">
                <H3>Общая сумма штрафов</H3>
                <p className="text-dark text-[32px]">{cond}$</p>
                <div className="flex gap-x-2.5">
                    <NewLink action={() => {return}} isLink={false} text={'Оплатить'}/>
                    <NewLink url={'!#'} text={'Подробнее'} />
                </div>
            </div>
            <Link href={'!#'}>
                <Image src={'t-arrow.svg'} width={24} height={24} alt="arrow"/>
            </Link>
        </div>
     )
}

export function BaseLink() {
    return (
        <div className="grid grid-cols-2 gap-x-2.5">
            <Link href={'!#'} className="w-full flex flex-col gap-y-[17px] p-2.5 rounded-base shadow-drop bg-white">
                <H5>История платежей</H5>
                <BaseP text={'за последний месяц'} className="opacity-50" />
            </Link>
            <Link href={'!#'} className="h-full w-full p-2.5 rounded-base shadow-drop bg-white flex gap-x-5 items-center">
                <NewImage src={'stat.svg'} alt="statistic"/>
                <H5>Статистика штрафов</H5>
            </Link>
        </div>
    )
}

export function Analitic() {
    return (
        <Link href={'!#'} className="flex gap-x-2.5 p-2.5 rounded-base bg-white shadow-drop">
            <NewImage src={'db.svg'} alt={'db'}/>
            <H5>Аналитика штрафов от <span className={`${horisontalGradient} font-bold`}>нейросети</span></H5>
        </Link>
    )
}

export function GIBDD() {
    return (
        <Link href={'!#'} className="flex gap-x-2.5 bg-white rounded-base shadow-drop p-2.5">
            <div className="flex flex-col gap-y-2.5 w-full">
                <H5>Как платить меньше?</H5>
                <BaseP text={'Узнать у ГИБДД'} />
            </div>
            <NewImage src={'g-arrow.svg'} alt={'gibdd'}/>
        </Link>
    )
}

export function MyAchivement() {
    let achives = [];
    
    return (
        <Link href={'/achivement'} className="flex flex-col gap-y-2.5 p-2.5 rounded-base bg-white shadow-drop">
            <div className="flex gap-x-2.5 items-center">
                <NewImage src={'Achive.svg'} alt={'Achivements'}/>
                <H5>Мои <span className={`${horisontalGradient} font-bold`}>достижения</span></H5>
            </div>
            <ul className="flex gap-x-2.5 w-full overflow-x-scroll">
                {achives.map(elem => <AchiveImage key={elem.id}/>)}
            </ul>
        </Link>
    )
}

export function ApiDesc() {
    return (
        <Link href={'/apis'} className="flex gap-x-2.5 p-2.5 rounded-base bg-white shadow-drop">
            <NewImage src={'Api.svg'} alt={'Api'}/>
            <div className="flex flex-col gap-y-2.5 w-full">
                <H4>Описание <span className="font-bold text-blue">API</span></H4>
                <BaseP text={'Узнать подробнее про API приложения...'}/>
            </div>
        </Link>
    )
}