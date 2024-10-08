// import { log } from "console";
// import path from "path";
// import { log } from "console"
var edit_panel = document.querySelector(".edit-panel ");
var colorInput = document.querySelector(".color input");
var colorP = document.querySelector(".color p");
if (colorInput && colorP) {
    colorP.innerHTML = colorInput.value;
    colorInput.addEventListener("input", function () {
        colorP.innerHTML = colorInput.value;
    });
}
// .btns
var underline = document.querySelector(".underline");
var italic = document.querySelector(".italic");
var bold = document.querySelector(".bold");
var align_left = document.querySelector(".text-left");
var align_center = document.querySelector(".text-center");
var align_right = document.querySelector(".text-right");
var arr = [underline, italic, bold];
arr.forEach(function (element) {
    element === null || element === void 0 ? void 0 : element.addEventListener("click", function () {
        element.classList.toggle("btn-enabled");
    });
});
align_left === null || align_left === void 0 ? void 0 : align_left.addEventListener("click", function () {
    align_left.classList.toggle("btn-enabled");
    align_center === null || align_center === void 0 ? void 0 : align_center.classList.remove("btn-enabled");
    align_right === null || align_right === void 0 ? void 0 : align_right.classList.remove("btn-enabled");
});
align_center === null || align_center === void 0 ? void 0 : align_center.addEventListener("click", function () {
    align_center.classList.toggle("btn-enabled");
    align_left === null || align_left === void 0 ? void 0 : align_left.classList.remove("btn-enabled");
    align_right === null || align_right === void 0 ? void 0 : align_right.classList.remove("btn-enabled");
});
align_right === null || align_right === void 0 ? void 0 : align_right.addEventListener("click", function () {
    align_right.classList.toggle("btn-enabled");
    align_center === null || align_center === void 0 ? void 0 : align_center.classList.remove("btn-enabled");
    align_left === null || align_left === void 0 ? void 0 : align_left.classList.remove("btn-enabled");
});
var profile_heading = document.querySelector(".profile h2");
var profile_p = document.querySelector(".profile p");
var experience_heading = document.querySelector(".experience-container h2");
var experience_info_1 = document.querySelector(".experience .info-1 :nth-child(1)");
var experience_info_2 = document.querySelector(".experience .info-1 :nth-child(2)");
var experience_info_3 = document.querySelector(".experience .info-2 :nth-child(1)");
var experience_info_4 = document.querySelector(".experience .info-2 :nth-child(2)");
var experience_info_5 = document.querySelector(".experience .info-3 :nth-child(1)");
var experience_info_6 = document.querySelector(".experience .info-3 :nth-child(2)");
var experience_work_heading_1 = document.querySelector(".experience .work-1 :nth-child(1)");
var experience_work_heading_2 = document.querySelector(".experience .work-2 :nth-child(1)");
var experience_work_heading_3 = document.querySelector(".experience .work-3 :nth-child(1)");
var experience_work_p_1 = document.querySelector(".experience .work-1 :nth-child(2)");
var experience_work_p_2 = document.querySelector(".experience .work-2 :nth-child(2)");
var experience_work_p_3 = document.querySelector(".experience .work-3 :nth-child(2)");
var education_heading = document.querySelector(".education h2");
var years_1 = document.querySelector(".years-1");
var years_2 = document.querySelector(".years-2");
var years_3 = document.querySelector(".years-3");
var degree_1 = document.querySelector(".degree-1");
var degree_2 = document.querySelector(".degree-2");
var degree_3 = document.querySelector(".degree-3");
var institute_1 = document.querySelector(".institute-1");
var institute_2 = document.querySelector(".institute-2");
var institute_3 = document.querySelector(".institute-3");
var contact_heading = document.querySelector(".contact h2");
var phone = document.querySelector(".contact-info :nth-child(1)");
var email = document.querySelector(".contact-info :nth-child(2)");
var img = document.querySelector(".img");
var cv_name = document.querySelector(".name");
var content = [
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
var content_string = [
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
var button_1 = document.querySelector(".button_1");
var button_2 = document.querySelector(".button_2");
var cv = document.querySelector(".cv");
button_1.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    for (var i = 0; i < content.length; i++) {
        if (button_1.value === content_string[i]) {
            if (underline === null || underline === void 0 ? void 0 : underline.classList.contains("btn-enabled")) {
                (_a = content[i]) === null || _a === void 0 ? void 0 : _a.classList.add("u");
            }
            if (!(underline === null || underline === void 0 ? void 0 : underline.classList.contains("btn-enabled"))) {
                (_b = content[i]) === null || _b === void 0 ? void 0 : _b.classList.remove("u");
            }
            if (bold === null || bold === void 0 ? void 0 : bold.classList.contains("btn-enabled")) {
                (_c = content[i]) === null || _c === void 0 ? void 0 : _c.classList.add("b");
            }
            if (!(bold === null || bold === void 0 ? void 0 : bold.classList.contains("btn-enabled"))) {
                (_d = content[i]) === null || _d === void 0 ? void 0 : _d.classList.remove("b");
            }
            if (italic === null || italic === void 0 ? void 0 : italic.classList.contains("btn-enabled")) {
                (_e = content[i]) === null || _e === void 0 ? void 0 : _e.classList.add("i");
            }
            if (!(italic === null || italic === void 0 ? void 0 : italic.classList.contains("btn-enabled"))) {
                (_f = content[i]) === null || _f === void 0 ? void 0 : _f.classList.remove("i");
            }
            if (align_left === null || align_left === void 0 ? void 0 : align_left.classList.contains("btn-enabled")) {
                (_g = content[i]) === null || _g === void 0 ? void 0 : _g.classList.add("left");
            }
            if (!(align_left === null || align_left === void 0 ? void 0 : align_left.classList.contains("btn-enabled"))) {
                (_h = content[i]) === null || _h === void 0 ? void 0 : _h.classList.remove("left");
            }
            if (align_center === null || align_center === void 0 ? void 0 : align_center.classList.contains("btn-enabled")) {
                (_j = content[i]) === null || _j === void 0 ? void 0 : _j.classList.add("center");
            }
            if (!(align_center === null || align_center === void 0 ? void 0 : align_center.classList.contains("btn-enabled"))) {
                (_k = content[i]) === null || _k === void 0 ? void 0 : _k.classList.remove("center");
            }
            if (align_right === null || align_right === void 0 ? void 0 : align_right.classList.contains("btn-enabled")) {
                (_l = content[i]) === null || _l === void 0 ? void 0 : _l.classList.add("right");
            }
            if (!(align_right === null || align_right === void 0 ? void 0 : align_right.classList.contains("btn-enabled"))) {
                (_m = content[i]) === null || _m === void 0 ? void 0 : _m.classList.remove("right");
            }
            if (colorInput) {
                content[i].style.color = colorInput.value;
            }
            var fontSelect = document.querySelector(".row-1 select");
            if (fontSelect) {
                var font = fontSelect.value;
                if (font === "font-1") {
                    content[i].style.fontFamily = "sans-serif";
                }
                if (font === "font-2") {
                    content[i].style.fontFamily = "reco";
                }
                if (font === "font-3") {
                    content[i].style.fontFamily = "sans-serif";
                }
            }
            // input***********
            var input = document.querySelector(".edit-text input");
            if (input) {
                content[i].innerText = input.value;
            }
            console.log("dkbzkd");
            var profilePictureInput = document.querySelector(".imageInput");
            var circle = document.querySelector(".img");
            var circle_img = document.querySelector(".img img");
            var profilePictureFile = (_o = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _o === void 0 ? void 0 : _o[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
            if (content_string[i] === "img") {
                if (profilePictureInput && circle) {
                    circle.innerHTML = " ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"  \" class=\"profilePicture\"/>") : "");
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
});
function content_click(element, values) {
    if (element) {
        element.addEventListener("click", function () {
            button_1.value = values;
            var isBold = element.classList.contains("b");
            var isItalic = element.classList.contains("i");
            var isUnderline = element.classList.contains("u");
            var isLeft = element.classList.contains("left");
            var isCenter = element.classList.contains("center");
            var isRight = element.classList.contains("right");
            if (isBold) {
                bold === null || bold === void 0 ? void 0 : bold.classList.add("btn-enabled");
            }
            else {
                bold === null || bold === void 0 ? void 0 : bold.classList.remove("btn-enabled");
            }
            if (isItalic) {
                italic === null || italic === void 0 ? void 0 : italic.classList.add("btn-enabled");
            }
            else {
                italic === null || italic === void 0 ? void 0 : italic.classList.remove("btn-enabled");
            }
            if (isUnderline) {
                underline === null || underline === void 0 ? void 0 : underline.classList.add("btn-enabled");
            }
            else {
                underline === null || underline === void 0 ? void 0 : underline.classList.remove("btn-enabled");
            }
            if (isLeft) {
                align_left === null || align_left === void 0 ? void 0 : align_left.classList.add("btn-enabled");
            }
            else {
                align_left === null || align_left === void 0 ? void 0 : align_left.classList.remove("btn-enabled");
            }
            if (isCenter) {
                align_center === null || align_center === void 0 ? void 0 : align_center.classList.add("btn-enabled");
            }
            else {
                align_center === null || align_center === void 0 ? void 0 : align_center.classList.remove("btn-enabled");
            }
            if (isRight) {
                align_right === null || align_right === void 0 ? void 0 : align_right.classList.add("btn-enabled");
            }
            else {
                align_right === null || align_right === void 0 ? void 0 : align_right.classList.remove("btn-enabled");
            }
            console.log("sad");
            var fontSelect = document.querySelector(".row-1 select");
            if (fontSelect) {
                var current_font = element.style.fontFamily;
                if (current_font === "mono") {
                    fontSelect.value = "font-2";
                }
                else if (current_font === "lace") {
                    fontSelect.value = "font-3";
                }
                else {
                    fontSelect.value = "font-1";
                }
            }
            if (fontSelect) {
                var font = fontSelect.value;
                if (font === "font-1") {
                    element.style.fontFamily = "sans-serif";
                    console.log(element.style.fontFamily);
                }
                if (font === "font-2") {
                    element.style.fontFamily = "sans-serif";
                }
                if (font === "font-3") {
                    element.style.fontFamily = "sans-serif";
                }
            }
            console.log(values);
            // input***********
            var input = document.querySelector(".edit-text input");
            var text = element.innerText;
            if (input) {
                input.value = text;
            }
            var text_editor = document.querySelector(".edit-text");
            // check_heading
            if (element.classList.contains("heading")) {
                text_editor === null || text_editor === void 0 ? void 0 : text_editor.classList.add("hide");
            }
            else {
                if (text_editor === null || text_editor === void 0 ? void 0 : text_editor.classList.contains("hide")) {
                    text_editor === null || text_editor === void 0 ? void 0 : text_editor.classList.remove("hide");
                }
            }
            // check_image
            var txt = document.querySelector(".edit-text");
            var btns = document.querySelector(".btns-container");
            var img_selector = document.querySelector(".img-selector");
            if (values === "img") {
                console.log("lll");
                txt === null || txt === void 0 ? void 0 : txt.classList.add("hide");
                btns === null || btns === void 0 ? void 0 : btns.classList.add("hide");
                img_selector === null || img_selector === void 0 ? void 0 : img_selector.classList.remove("hide");
            }
            else {
                txt === null || txt === void 0 ? void 0 : txt.classList.remove("hide");
                btns === null || btns === void 0 ? void 0 : btns.classList.remove("hide");
                img_selector === null || img_selector === void 0 ? void 0 : img_selector.classList.add("hide");
            }
            var current_color = window.getComputedStyle(element).color;
            console.log(current_color);
            function rgbToHex(rgb) {
                var _a;
                var result = (_a = rgb.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(Number);
                if (result && result.length === 3) {
                    return "#".concat(((1 << 24) + (result[0] << 16) + (result[1] << 8) + result[2])
                        .toString(16)
                        .slice(1)
                        .toUpperCase());
                }
                return rgb;
            }
            var hexColor = rgbToHex(current_color);
            if (colorInput) {
                colorInput.value = hexColor;
            }
            if (colorInput && colorP) {
                colorP.innerHTML = colorInput.value;
            }
        });
    }
}
button_2.addEventListener("click", function () {
    var element = cv;
    html2pdf()
        .from(element)
        .save();
});
content.forEach(function (element, index) {
    content_click(element, content_string[index]);
});
