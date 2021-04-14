import Image from 'next/image'

export const YourComponent= ({Foto}) => {
    return (
        <Image
            src={Foto}
            height={144}
            width={144}
            alt="Satria"
        />     
    )
}



