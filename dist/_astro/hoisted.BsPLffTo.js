import"./hoisted.CEFdkl9q.js";const r=[{name:"VPS 1",href:"https://my.xdual.es/checkout/config/12",price:"2",features:["🇳🇱 Netherlands","2 Xeon vCores","4GB DDR4 RAM","50GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 2",href:"https://my.xdual.es/checkout/config/13",price:"3",features:["🇳🇱 Netherlands","4 Xeon vCores","6GB DDR4 RAM","70GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 3",href:"https://my.xdual.es/checkout/config/14",price:"4",features:["🇳🇱 Netherlands","6 Xeon vCores","8GB DDR4 RAM","90GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 4",href:"https://my.xdual.es/checkout/config/15",price:"6",features:["🇳🇱 Netherlands","6 Xeon vCores","12GB DDR4 RAM","125GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 5",href:"https://my.xdual.es/checkout/config/17",price:"8",features:["🇳🇱 Netherlands","8 Xeon vCores","16GB DDR4 RAM","160GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 6",href:"https://my.xdual.es/checkout/config/23",price:"10",features:["🇳🇱 Netherlands","10 Xeon vCores","20GB DDR4 RAM","200GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 7",href:"https://my.xdual.es/checkout/config/19",price:"12",features:["🇳🇱 Netherlands","14 Xeon vCores","28GB DDR4 RAM","260GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 8",href:"https://my.xdual.es/checkout/config/21",price:"20",features:["🇳🇱 Netherlands","16 Xeon vCores","40GB DDR4 RAM","400GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 9",href:"https://my.xdual.es/checkout/config/22",price:"30",features:["🇳🇱 Netherlands","18 Xeon vCores","60GB DDR4 RAM","600GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]}],i=[{name:"VPS 1",href:"https://my.xdual.es/checkout/config/1",price:"5",features:["🇩🇪 Germany, Frankfurt","2 Intel vCores","4GB DDR4 RAM","50GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 2",href:"https://my.xdual.es/checkout/config/7",price:"8",features:["🇩🇪 Germany, Frankfurt","4 Intel vCores","6GB DDR4 RAM","70GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 3",href:"https://my.xdual.es/checkout/config/8",price:"10",features:["🇩🇪 Germany, Frankfurt","6 Intel vCores","8GB DDR4 RAM","90GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 4",href:"https://my.xdual.es/checkout/config/9",price:"15",features:["🇩🇪 Germany, Frankfurt","6 Intel vCores","12GB DDR4 RAM","125GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]},{name:"VPS 5",href:"https://my.xdual.es/checkout/config/10",price:"20",features:["🇩🇪 Germany, Frankfurt","8 Intel vCores","16GB DDR4 RAM","160GB NVMe","AntiDDoS path.net + 1 IPv4","Unlimited Bandwidth","24/7 Support"]}];function s(n){const e=document.getElementById("productsContainer");if(!e){console.error("productsContainer element not found");return}e.innerHTML=n.map(t=>`
        <div class="w-full max-w-sm p-4 border rounded-lg shadow sm:p-8 mt-5">
            <h5 class="mb-1 text-xl font-medium">${t.name}</h5>
            <h5 class="mb-1 text-sm font-thin text-gray-100">Starting at</h5>
            <div class="flex items-baseline text-gray-100">
                <span class="text-3xl font-semibold">&euro;</span>
                <span class="text-5xl font-extrabold tracking-tight">${t.price}</span>
                <span class="ms-1 text-xl font-normal text-gray-400">/month</span>
            </div>
            <ul role="list" class="md:space-y-2 my-4">
                ${t.features.map(a=>`
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
                            ${a}
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
    `).join("")}function o(n){const e=document.getElementById("nlButton"),t=document.getElementById("deButton");if(!e||!t){console.error("nlButton or deButton element not found");return}n==="NL"?(s(r),e.classList.add("bg-[#ff7d0b]"),e.classList.remove("bg-white"),t.classList.add("bg-white"),t.classList.remove("bg-[#ff7d0b]")):(s(i),t.classList.add("bg-[#ff7d0b]"),t.classList.remove("bg-white"),e.classList.add("bg-white"),e.classList.remove("bg-[#ff7d0b]"))}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("nlButton"),e=document.getElementById("deButton");n?n.addEventListener("click",()=>o("NL")):console.error("nlButton element not found"),e?e.addEventListener("click",()=>o("DE")):console.error("deButton element not found"),o("NL")});
