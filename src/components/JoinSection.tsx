interface JoinSectionProps {
  bg: string;
  bgButton: string;
}

export default function JoinSection({bg, bgButton}: JoinSectionProps) {
  return (
    <section className={`mx-auto w-full border-b bg-${bg} md:h-120 flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center gap-y-4.5 text-center py-30 px-5 md:h-52.75 md:text-center md:px-17.5 md:py-33.62 lg:px-62.5 lg:py-40.5">
            <p className="style-p2 uppercase">What we belive in</p>
            <h3 className="style-h3">Join the Primal Tribe Today!</h3>
            <a href="/reserve-your-spot" type="button" className={`style-link py-3 px-4.25 bg-${bgButton} rounded-[0.45rem] hover:bg-black hover:text-white transition-all duration-200`}>reserve your spot</a>
        </div>
    </section>
  )
}
