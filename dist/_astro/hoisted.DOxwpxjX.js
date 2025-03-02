import"./hoisted.DCfIK8DO.js";const a=[{name:"VPS 1",href:"/",price:"4",features:["🇩🇪 Germany, Frankfurt","1 Ryzen vCores","2GB DDR4 RAM","20GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","5TB per month","24/7 Support"]},{name:"VPS 2",href:"/",price:"6",features:["🇩🇪 Germany, Frankfurt","1 Ryzen vCores","4GB DDR4 RAM","25GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","10TB per month","24/7 Support"]},{name:"VPS 3",href:"/",price:"8",features:["🇩🇪 Germany, Frankfurt","2 Ryzen vCores","6GB DDR4 RAM","50GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","15TB per month","24/7 Support"]},{name:"VPS 4",href:"/",price:"10",features:["🇩🇪 Germany, Frankfurt","2 Ryzen vCores","8GB DDR4 RAM","50GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","20TB per month","24/7 Support"]}],l=[{name:"VPS 1",href:"/",price:"8",features:["🇩🇪 Germany, Frankfurt","2 Xeon vCores","4GB DDR4 RAM","50GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","4TB per month","24/7 Support"]},{name:"VPS 2",href:"/",price:"16",features:["🇩🇪 Germany, Frankfurt","6 Xeon vCores","16GB DDR4 RAM","100GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","8TB per month","24/7 Support"]},{name:"VPS 3",href:"/",price:"32",features:["🇩🇪 Germany, Frankfurt","8 Xeon vCores","32GB DDR4 RAM","200GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","12TB per month","24/7 Support"]},{name:"VPS 4",href:"/",price:"64",features:["🇩🇪 Germany, Frankfurt","10 Intel vCores","64GB DDR4 RAM","400GB NVMe","AntiDDoS AS203446 + 1 IPv4 + 1 IPv6","16TB pero month","24/7 Support"]}];function o(n){const e=document.getElementById("productsContainer");if(!e){console.error("productsContainer element not found");return}e.innerHTML=n.map(t=>`
        <div class="w-full max-w-sm p-4 border rounded-lg shadow sm:p-8 mt-5">
            <h5 class="mb-1 text-xl font-medium">${t.name}</h5>
            <h5 class="mb-1 text-sm font-thin text-gray-100">Starting at</h5>
            <div class="flex items-baseline text-gray-100">
                <span class="text-3xl font-semibold">&euro;</span>
                <span class="text-5xl font-extrabold tracking-tight">${t.price}</span>
                <span class="ms-1 text-xl font-normal text-gray-400">/month</span>
            </div>
            <ul role="list" class="md:space-y-2 my-4">
                ${t.features.map(s=>`
                    <li class="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-6 w-5 flex-none text-black"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-400 ms-3">
                            ${s}
                        </span>
                    </li>
                `).join("")}
            </ul>
            <a
                type="button"
                class="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                href="${t.href}"
            >
                Order
            </a>
        </div>
    `).join("")}function r(n){const e=document.getElementById("nlButton"),t=document.getElementById("deButton");if(!e||!t){console.error("nlButton or deButton element not found");return}n==="NL"?(o(a),e.classList.add("bg-[#22c55e]"),e.classList.remove("bg-white"),t.classList.add("bg-white"),t.classList.remove("bg-[#22c55e]")):(o(l),t.classList.add("bg-[#22c55e]"),t.classList.remove("bg-white"),e.classList.add("bg-white"),e.classList.remove("bg-[#22c55e]"))}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("nlButton"),e=document.getElementById("deButton");n?n.addEventListener("click",()=>r("NL")):console.error("nlButton element not found"),e?e.addEventListener("click",()=>r("DE")):console.error("deButton element not found"),r("NL")});
