export default function InputField({name, placeholder, type='text'}) {
    return <input type={type} name={name} placeholder={placeholder} className="bg-light-grey shadow-drop border-[1px] border-dark-grey rounded-little p-2.5 placeholder:text-base palceholder:table:text-base-t palceholder:table:text-base-d placeholder:leading-3 h-[35px] placeholder:align-middle" autoComplete="off"></input>
}