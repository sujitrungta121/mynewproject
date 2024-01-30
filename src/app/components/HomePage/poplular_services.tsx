
import popularServices from "../../common/metadata/popluar_services_data"

export default function PopularServices(){
    return(
        <main>
            <div className="flex flex-col pl-32 pr-32">
                {/* heading */}
                <div className="flex flex-row justify-between">
                    {/* leftpart */}
                    <div className="flex flex-col gap-2">
                        <strong className="text-4xl">Popular Services</strong>
                        <span className="text-sm text-gray-700">Most viewed and all-time top-selling services</span>
                    </div>
                    {/* rightpart */}
                    <div className="flex flex-row ">
                   {
                    popularServices?.map((item)=>{
                        return(
                            <div key={item.id} className="border bg-green-900 items-center justify-center">
                                <span>{item.services}</span>
                            </div>
                        )
                    })
                   }
                    </div>
                </div>

                {/* body */}
                <div>body</div>
            </div>
        </main>
    )
}