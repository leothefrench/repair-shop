import Image from 'next/image'

export const metadata = {
    title: "Page Not Found",
}

export default function NotFound() {
  return (
    <div className="w-full px-2">
      <div className='flex flex-col justify-center items-center gap-4 mx-auto py-4'>
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          className="m-0 rounded-xl"
          src="/images/not-found.png"
          width={300}
          height={300}
          sizes="300px"
          alt="page Not Found"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
