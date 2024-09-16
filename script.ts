// import { log } from "console";
// import path from "path";


// import { log } from "console"

const edit_panel = document.querySelector(".edit-panel ")





const colorInput = document.querySelector(".color input") as HTMLInputElement | null;
const colorP = document.querySelector(".color p") as HTMLElement | null;

if (colorInput && colorP) {
    colorP.innerHTML = colorInput.value;

    colorInput.addEventListener("input", () => {
        colorP.innerHTML = colorInput.value;
    });
}





// .btns
const underline = document.querySelector(".underline")
const italic = document.querySelector(".italic")
const bold = document.querySelector(".bold")

const align_left = document.querySelector(".text-left")
const align_center = document.querySelector(".text-center")
const align_right = document.querySelector(".text-right")


const arr = [underline, italic, bold]


arr.forEach(element => {
    element?.addEventListener("click", () => {
        element.classList.toggle("btn-enabled")
    })
});

align_left?.addEventListener("click", () => {
    align_left.classList.toggle("btn-enabled");

    align_center?.classList.remove("btn-enabled")
    align_right?.classList.remove("btn-enabled")
})
align_center?.addEventListener("click", () => {
    align_center.classList.toggle("btn-enabled");

    align_left?.classList.remove("btn-enabled")
    align_right?.classList.remove("btn-enabled")
})
align_right?.addEventListener("click", () => {
    align_right.classList.toggle("btn-enabled");

    align_center?.classList.remove("btn-enabled")
    align_left?.classList.remove("btn-enabled")
})



const profile_heading = document.querySelector(".profile h2") as HTMLElement
const profile_p = document.querySelector(".profile p") as HTMLElement
const experience_heading = document.querySelector(".experience-container h2") as HTMLElement
const experience_info_1 = document.querySelector(".experience .info-1 :nth-child(1)") as HTMLElement
const experience_info_2 = document.querySelector(".experience .info-1 :nth-child(2)") as HTMLElement
const experience_info_3 = document.querySelector(".experience .info-2 :nth-child(1)") as HTMLElement
const experience_info_4 = document.querySelector(".experience .info-2 :nth-child(2)") as HTMLElement
const experience_info_5 = document.querySelector(".experience .info-3 :nth-child(1)") as HTMLElement
const experience_info_6 = document.querySelector(".experience .info-3 :nth-child(2)") as HTMLElement
const experience_work_heading_1 = document.querySelector(".experience .work-1 :nth-child(1)") as HTMLElement
const experience_work_heading_2 = document.querySelector(".experience .work-2 :nth-child(1)") as HTMLElement
const experience_work_heading_3 = document.querySelector(".experience .work-3 :nth-child(1)") as HTMLElement
const experience_work_p_1 = document.querySelector(".experience .work-1 :nth-child(2)") as HTMLElement
const experience_work_p_2 = document.querySelector(".experience .work-2 :nth-child(2)") as HTMLElement
const experience_work_p_3 = document.querySelector(".experience .work-3 :nth-child(2)") as HTMLElement
const education_heading = document.querySelector(".education h2") as HTMLElement
const years_1 = document.querySelector(".years-1") as HTMLElement
const years_2 = document.querySelector(".years-2") as HTMLElement
const years_3 = document.querySelector(".years-3") as HTMLElement
const degree_1 = document.querySelector(".degree-1") as HTMLElement
const degree_2 = document.querySelector(".degree-2") as HTMLElement
const degree_3 = document.querySelector(".degree-3") as HTMLElement
const institute_1 = document.querySelector(".institute-1") as HTMLElement
const institute_2 = document.querySelector(".institute-2") as HTMLElement
const institute_3 = document.querySelector(".institute-3") as HTMLElement
const contact_heading = document.querySelector(".contact h2") as HTMLElement
const phone = document.querySelector(".contact-info :nth-child(1)") as HTMLElement
const email = document.querySelector(".contact-info :nth-child(2)") as HTMLElement
const img = document.querySelector(".img") as HTMLElement
const cv_name= document.querySelector(".name") as HTMLElement



const content = [
    profile_heading,
    profile_p,
    experience_heading,
    experience_info_1,
    experience_info_2,
    experience_info_3,
    experience_info_4,
    experience_info_5,
    experience_info_6,
    experience_work_heading_1,
    experience_work_heading_2,
    experience_work_heading_3,
    experience_work_p_1,
    experience_work_p_2,
    experience_work_p_3,
    education_heading,
    years_1,
    years_2,
    years_3,
    degree_1,
    degree_2,
    degree_3,
    institute_1,
    institute_2,
    institute_3,
    contact_heading,
    phone,
    email,
    img,
    cv_name

];


const content_string = [
    "profile_heading",
    "profile_p",
    "experience_heading",
    "experience_info_1",
    "experience_info_2",
    "experience_info_3",
    "experience_info_4",
    "experience_info_5",
    "experience_info_6",
    "experience_work_heading_1",
    "experience_work_heading_2",
    "experience_work_heading_3",
    "experience_work_p_1",
    "experience_work_p_2",
    "experience_work_p_3",
    "education_heading",
    "years_1",
    "years_2",
    "years_3",
    "degree_1",
    "degree_2",
    "degree_3",
    "institute_1",
    "institute_2",
    "institute_3",
    "contact_heading",
    "phone",
    "email",
    "img",
    "cv_name"
];





const button_1 = document.querySelector(".button_1") as HTMLButtonElement
const button_2 = document.querySelector(".button_2") as HTMLButtonElement
const cv = document.querySelector(".cv")


button_1.addEventListener("click", () => {

    for (let i = 0; i < content.length; i++) {
        
        if (button_1.value === content_string[i]) {

            if (underline?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("u")
            }
            if (!(underline?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("u")
            }

            if (bold?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("b")
            }
            if (!(bold?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("b")
            }

            if (italic?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("i")
            }
            if (!(italic?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("i")
            }

            if (align_left?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("left")
            }
            if (!(align_left?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("left")
            }

            if (align_center?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("center")
            }
            if (!(align_center?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("center")
            }

            if (align_right?.classList.contains("btn-enabled")) {
                content[i]?.classList.add("right")
            }
            if (!(align_right?.classList.contains("btn-enabled"))) {
                content[i]?.classList.remove("right")
            }

            if (colorInput) {
                content[i].style.color = colorInput.value
            }

            let fontSelect = document.querySelector(".row-1 select") as HTMLSelectElement | null;
            if (fontSelect) {
                const font = fontSelect.value
                if (font === "font-1") {

                    content[i].style.fontFamily = "aeonr"
                }
                if (font === "font-2") {

                    content[i].style.fontFamily = "mono"

                }
                if (font === "font-3") {

                    content[i].style.fontFamily = "lace"

                }

            }
            // input***********

            const input = document.querySelector(".edit-text input") as HTMLInputElement | null;

            if (input) {
                
                content[i].innerText = input.value
            }
            console.log("dkbzkd");
            
            const profilePictureInput = document.querySelector(".imageInput") as HTMLInputElement | null;
            const circle=document.querySelector(".img") as HTMLInputElement | null;
            const circle_img=document.querySelector(".img img") as HTMLInputElement ;

            const profilePictureFile = profilePictureInput?.files?.[0];
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
            
                    if (content_string[i]==="img") {
                        
                        if (profilePictureInput && circle) {
                            
                            circle.innerHTML=` ${profilePictureURL ? `<img src="${profilePictureURL}" alt="  " class="profilePicture"/>` : ""}`
                        }
                    }


            // if (fileInput) {
            //   fileInput.addEventListener("change", (event) => {
            //     const file = (event.target as HTMLInputElement).files?.[0];
            //     if (file) {
            //       const reader = new FileReader();
            //       reader.onload = (e) => {
            //         const contentElement = content[i]; // Ensure content[i] is valid
            //         if (contentElement) {
            //           contentElement.style.backgroundImage = `url(${e.target?.result})`;
            //         } else {
            //           console.error("Content element at index", i, "is not defined or out of bounds.");
            //         }
            //       };
            //       reader.readAsDataURL(file); // Read the file as a data URL
            //     } else {
            //       console.error("No file selected.");
            //     }
            //   });
            // } else {
            //   console.error("File input element not found.");
            // }
            



        }
    }

})


button_2.addEventListener("click", () => {
    const element = cv

    html2pdf()
        .from(element)
        .save();
});


function content_click(element: HTMLElement | null, values: string) {



    if (element) {
        element.addEventListener("click", () => {



            button_1.value = values;

            const isBold = element.classList.contains("b");
            const isItalic = element.classList.contains("i");
            const isUnderline = element.classList.contains("u");
            const isLeft = element.classList.contains("left");
            const isCenter = element.classList.contains("center");
            const isRight = element.classList.contains("right");


            if (isBold) {
                bold?.classList.add("btn-enabled")
            }
            else {
                bold?.classList.remove("btn-enabled")
            }
            if (isItalic) {
                italic?.classList.add("btn-enabled")
            }
            else {
                italic?.classList.remove("btn-enabled")
            }

            if (isUnderline) {
                underline?.classList.add("btn-enabled")
            }
            else {
                underline?.classList.remove("btn-enabled")
            }
            if (isLeft) {
                align_left?.classList.add("btn-enabled")
            }
            else {
                align_left?.classList.remove("btn-enabled")
            }
            if (isCenter) {
                align_center?.classList.add("btn-enabled")
            }
            else {
                align_center?.classList.remove("btn-enabled")
            }
            if (isRight) {
                align_right?.classList.add("btn-enabled")
            }
            else {
                align_right?.classList.remove("btn-enabled")
            }


            let fontSelect = document.querySelector(".row-1 select") as HTMLSelectElement | null;
            if (fontSelect) {

                const current_font = element.style.fontFamily
                if (current_font === "mono") {
                    fontSelect.value = "font-2"
                }
                else if (current_font === "lace") {
                    fontSelect.value = "font-3"
                }
                else {
                    fontSelect.value = "font-1"
                }

            }
            if (fontSelect) {
                const font = fontSelect.value
                if (font === "font-1") {

                    element.style.fontFamily = "aeonr"
                }
                if (font === "font-2") {

                    element.style.fontFamily = "mono"

                }
                if (font === "font-3") {

                    element.style.fontFamily = "lace"

                }

            }

            console.log(values);
            
            // input***********

            const input = document.querySelector(".edit-text input") as HTMLInputElement | null;
            const text = element.innerText

            if (input) {
                input.value = text
            }

            const text_editor = document.querySelector(".edit-text")
            // check_heading
            if (element.classList.contains("heading")) {
                text_editor?.classList.add("hide")
            }
            else {
                if (text_editor?.classList.contains("hide")) {
                    text_editor?.classList.remove("hide")

                }
            }

                // check_image
            const txt=document.querySelector(".edit-text")
            const btns=document.querySelector(".btns-container")
            const img_selector=document.querySelector(".img-selector")



            if (values==="img") {
                console.log("lll");
                
                txt?.classList.add("hide")
                btns?.classList.add("hide")
                img_selector?.classList.remove("hide")
            }
            else{
                txt?.classList.remove("hide")
                btns?.classList.remove("hide")
                img_selector?.classList.add("hide")
            }




            const current_color = window.getComputedStyle(element).color
            console.log(current_color);

            function rgbToHex(rgb: string): string {
                const result = rgb.match(/\d+/g)?.map(Number);
                if (result && result.length === 3) {
                    return `#${((1 << 24) + (result[0] << 16) + (result[1] << 8) + result[2])
                        .toString(16)
                        .slice(1)
                        .toUpperCase()}`;
                }
                return rgb;




            }

            const hexColor = rgbToHex(current_color);

            if (colorInput) {

                colorInput.value = hexColor
            }
            if (colorInput && colorP) {

                colorP.innerHTML = colorInput.value
            }
        });
    }
}



content.forEach((element, index) => {
    content_click(element, content_string[index]);
});
