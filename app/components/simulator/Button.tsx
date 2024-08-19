interface ButtonProps {
    label: String;
    type: String;
}
export default function Button({ label, type }: ButtonProps) {
    switch (type) {
        case 'menu':
            return <button className="text-xs py-3 font-bold my-[5px] w-full bg-gradient-to-t from-[#000000] to-[#3e3e3e] text-white border-white border-[0.1px] shadow-md">{label}</button>
        case 'category':
            return <button>{label}</button>
        case 'subcategory':
            return <button>{label}</button>
        case 'menuOption':
            return <button>{label}</button>
        case 'menuExtra':
            return <button>{label}</button>
        default:
            return <button>{label}</button>
    }
}