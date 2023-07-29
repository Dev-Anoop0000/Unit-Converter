function store() {
    let val1 = document.getElementById("num1");
    let val2 = document.getElementById("num2");
    let result = document.getElementById("result");

    // ------- Unit Initilization --------- 
    let unit1 = document.getElementById("leftUnit");
    let unitValue1 = unit1.options[unit1.selectedIndex].text;
    let unit2 = document.getElementById("rightUnit");
    let unitValue2 = unit2.options[unit2.selectedIndex].text;

    // Temp1 And Temp2 Variable.....


    function test() {
        if (unitValue1 == "--Select--" && unitValue2 == "--Select--") {

            result.innerHTML = "Please Select Both  Unit."
        } else if (unitValue1 == "--Select--" && unitValue2 == "Fahrenheit") {

            result.innerHTML = "Please Also Select The left Unit."
        } else if (unitValue1 == "--Select--" && unitValue2 == "Celsius") {

            result.innerHTML = "Please Also Select The left Unit."
        } else if (unitValue1 == "--Select--" && unitValue2 == "Kelvin") {

            result.innerHTML = "Please Also Select The left Unit."
        } else if (unitValue1 == "--Select--" && unitValue2 == "Rankine") {

            result.innerHTML = "Please Also Select The left Unit."
        } else if (unitValue1 == "Fahrenheit" && unitValue2 == "--Select--") {

            result.innerHTML = "Please Also Select Right Unit."
        } else if (unitValue1 == "Celsius" && unitValue2 == "--Select--") {

            result.innerHTML = "Please Also Select Right Unit."
        } else if (unitValue1 == "Kelvin" && unitValue2 == "--Select--") {

            result.innerHTML = "Please Also Select Right Unit."
        } else if (unitValue1 == "Rankine" && unitValue2 == "--Select--") {
            result.innerHTML = "Please Also Select Right Unit."
        } else {
            result.innerHTML = "";
        }



    }

    // This is for disable option Left To Right ==>>
    if (unitValue1 == "Fahrenheit") {
        unit2[0].style.display = "block";
        unit2[1].style.display = "none";
        unit2[2].style.display = "block";
        unit2[3].style.display = "block";
        unit2[4].style.display = "block";
    }
    if (unitValue1 == "Celsius") {
        unit2[0].style.display = "block";
        unit2[1].style.display = "block";
        unit2[2].style.display = "none";
        unit2[3].style.display = "block";
        unit2[4].style.display = "block";
    }
    if (unitValue1 == "Kelvin") {
        unit2[0].style.display = "block";
        unit2[1].style.display = "block";
        unit2[2].style.display = "block";
        unit2[3].style.display = "none";
        unit2[4].style.display = "block";
    }
    if (unitValue1 == "Rankine") {
        unit2[0].style.display = "block";
        unit2[1].style.display = "block";
        unit2[2].style.display = "block";
        unit2[3].style.display = "block";
        unit2[4].style.display = "none";
    }

    // This is for disable option Right To Left ==>>
    if (unitValue2 == "Fahrenheit") {
        unit1[0].style.display = "block";
        unit1[1].style.display = "none";
        unit1[2].style.display = "block";
        unit1[3].style.display = "block";
        unit1[4].style.display = "block";
    }
    if (unitValue2 == "Celsius") {
        unit1[0].style.display = "block";
        unit1[1].style.display = "block";
        unit1[2].style.display = "none";
        unit1[3].style.display = "block";
        unit1[4].style.display = "block";
    }
    if (unitValue2 == "Kelvin") {
        unit1[0].style.display = "block";
        unit1[1].style.display = "block";
        unit1[2].style.display = "block";
        unit1[3].style.display = "none";
        unit1[4].style.display = "block";
    }
    if (unitValue2 == "Rankine") {
        unit1[0].style.display = "block";
        unit1[1].style.display = "block";
        unit1[2].style.display = "block";
        unit1[3].style.display = "block";
        unit1[4].style.display = "none";
    }


    // This is Left to Right Calculation ===>>>
    // Fahrenheit To Celsius Left 2 Right ====>>>
    function LfahToCel(tepm1) {
        var Celsius = (tepm1 - 32) * 5 / 9;
        val2.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}C<sup>o</sup>`);
    }

    // Fahrenheit to Kelvin  Left 2 Right ======>>>>
    function LfahToKel(tepm1) {
        var Kelvin = (((tepm1 - 32) * 9 / 5) + 273.15);
        val2.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}K<sup>o</sup>`);
    }

    // Fahrenheit to Rankine   Left 2 Right =====>>>
    function LfahToRan(tepm1) {
        var Rankine = (tepm1 + 459.67);
        val2.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}R<sup>o</sup>`);
    }

    // Celsius To Fahrenheit   Left 2 Right ===>>>
    function LcelToFah(tepm1) {
        var Fahrenheit = ((tepm1 * 9 / 5) + 32);
        val2.value = Fahrenheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}F<sup>o</sup>`);
    }

    // Celsius To Kelvin Left 2 Right  ====>>>
    function LcelToKel(tepm1) {
        var Kelvin = ((tepm1 + 273.15));
        val2.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}K<sup>o</sup>`);
    }

    // Celsius To Rankine  Left 2 Right ====>>>
    function LcelToRan(tepm1) {
        var Rankine = ((tepm1 + 273.15) * 9 / 5);
        val2.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}R<sup>o</sup>`);
    }

    // Kelvin To Fahrenheit  Left 2 Right ====>>>
    function LkelToFah(tepm1) {
        var Fahrenheit = ((tepm1 - 273.15) * 9 / 5) + 32;
        val2.value = Fahrenheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}F<sup>o</sup>`);
    }

    // Kelvin To Celsius  Left 2 Right ====>>>
    function LkelToCel(tepm1) {
        var Celsius = ((tepm1 - 273.15));
        val2.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}C<sup>o</sup>`);
    }
    // Kelvin To Rankine Left 2 Right  ====>>>
    function LkelToRan(tepm1) {
        var Rankine = ((tepm1 * 9 / 5));
        val2.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}R<sup>o</sup>`);
    }

    // Rankine To Fahreheit  Left 2 Right ===>>>
    function LranToFah(tepm1) {
        var Fahreheit = ((tepm1 - 459.67));
        val2.value = Fahreheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}F<sup>o</sup>`);
    }
    // Rankine To Celsius Left 2 Right  ===>>>
    function LranToCel(tepm1) {
        var Celsius = ((tepm1 - 491.67) / (9 / 5));
        val2.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}C<sup>o</sup>`);
    }
    // Rankine To Kelvin  Left 2 Right ===>>>
    function LranToKel(tepm1) {
        var Kelvin = ((tepm1) / (9 / 5));
        val2.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val2.value}K<sup>o</sup>`);
    }

    // --------- Left To Right ===>>
    function L2R_Conversion() {
        var tepm1 = parseFloat(document.getElementById("num1").value);
        // Fahrenheit To Celsius  Left 2 Right ====>>>
        if ((unitValue1 == "Fahrenheit") && (unitValue2 == "Celsius")) {
            LfahToCel(tepm1);
        }

        // Fahrenheit To Kelvi  Left 2 Right ====>>>
        if ((unitValue1 == "Fahrenheit") && (unitValue2 == "Kelvin")) {
            LfahToKel(tepm1);
        }

        // Fahrenheit To Rankine  Left 2 Right ====>>>
        if ((unitValue1 == "Fahrenheit") && (unitValue2 == "Rankine")) {
            LfahToRan(tepm1);
        }

        // Celsius To Fahrenheit   Left 2 Right ====>>>>
        if ((unitValue1 == "Celsius") && (unitValue2 == "Fahrenheit")) {
            LcelToFah(tepm1);
        }
        // Celsius To Kelvin  Left 2 Right  ====>>>>
        if ((unitValue1 == "Celsius") && (unitValue2 == "Kelvin")) {
            LcelToKel(tepm1);
        }
        // Celsius To Rankine   Left 2 Right ====>>>>
        if ((unitValue1 == "Celsius") && (unitValue2 == "Rankine")) {
            LcelToRan(tepm1);
        }
        // Kelvin To Fahrenheit Left 2 Right  ====>>>
        if ((unitValue1 == "Kelvin") && (unitValue2 == "Fahrenheit")) {
            LkelToFah(tepm1);
        }
        // Kelvin To Celsius Left 2 Right  ====>>>
        if ((unitValue1 == "Kelvin") && (unitValue2 == "Celsius")) {
            LkelToCel(tepm1);
        }
        // Kelvin To Rankine Left 2 Right  ====>>>
        if ((unitValue1 == "Kelvin") && (unitValue2 == "Rankine")) {
            LkelToRan(tepm1);
        }

        // Rankine To Fahreheit  Left 2 Right ===>>>
        if ((unitValue1 == "Rankine") && (unitValue2 == "Farenheit")) {
            LranToFah(tepm1);
        }
        // Rankine To Celsius  Left 2 Right ===>>>
        if ((unitValue1 == "Rankine") && (unitValue2 == "Celsius")) {
            LranToCel(tepm1);
        }
        // Rankine To Kelvin  Left 2 Right ===>>>
        if ((unitValue1 == "Rankine") && (unitValue2 == "Kelvin")) {
            LranToKel(tepm1);
        }

    }
    document.getElementById("L2R").addEventListener("click", L2R_Conversion);


    // ----------- Right 2 Left Conversion Function----------
    // Fahrenheit To Celsius Right 2 Left  ====>>>
    function RfahToCel(tepm2) {
        var Celsius = (tepm2 - 32) * 5 / 9;
        val1.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}C<sup>o</sup>`);
    }

    // Fahrenheit to Kelvin Right 2 Left ======>>>>
    function RfahToKel(tepm2) {
        var Kelvin = (((tepm2 - 32) * 9 / 5) + 273.15);
        val1.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}K<sup>o</sup>`);
    }

    // Fahrenheit to Rankine   Right 2 Left =====>>>
    function RfahToRan(tepm2) {
        var Rankine = (tepm2 + 459.67);
        val1.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}R<sup>o</sup>`);
    }

    // Celsius To Fahrenheit   Right 2 Left ===>>>
    function RcelToFah(tepm2) {
        var Fahrenheit = ((tepm2 * 9 / 5) + 32);
        val1.value = Fahrenheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}F<sup>o</sup>`);
    }

    // Celsius To Kelvin  Right 2 Left ====>>>
    function RcelToKel(tepm2) {
        var Kelvin = ((tepm2 + 273.15));
        val1.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}K<sup>o</sup>`);
    }

    // Celsius To Rankine  Right 2 Left ====>>>
    function RcelToRan(tepm2) {
        var Rankine = ((tepm2 + 273.15) * 9 / 5);
        val1.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}R<sup>o</sup>`);
    }

    // Kelvin To Fahrenheit  Right 2 Left ====>>>
    function RkelToFah(tepm2) {
        var Fahrenheit = ((tepm2 - 273.15) * 9 / 5) + 32;
        val1.value = Fahrenheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}F<sup>o</sup>`);
    }

    // Kelvin To Celsius  Right 2 Left ====>>>
    function RkelToCel(tepm2) {
        var Celsius = ((tepm2 - 273.15));
        val1.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}C<sup>o</sup>`);
    }
    // Kelvin To Rankine  Right 2 Left ====>>>
    function RkelToRan(tepm2) {
        var Rankine = ((tepm2 * 9 / 5));
        val1.value = Rankine.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}R<sup>o</sup>`);
    }

    // Rankine To Fahreheit  Right 2 Left ===>>>
    function RranToFah(tepm2) {
        var Fahreheit = ((tepm2 - 459.67));
        val1.value = Fahreheit.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}F<sup>o</sup>`);
    }
    // Rankine To Celsius  Right 2 Left ===>>>
    function RranToCel(tepm2) {
        var Celsius = ((tepm2 - 491.67) / (9 / 5));
        val1.value = Celsius.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}C<sup>o</sup>`);
    }
    // Rankine To Kelvin  Right 2 Left ===>>>
    function RranToKel(tepm2) {
        var Kelvin = ((tepm2) / (9 / 5));
        val1.value = Kelvin.toFixed(3);
        // -------- Call Card Function------ 
        card(`${val1.value}K<sup>o</sup>`);
    }


    // This is Right to Left Calculation  ===>>>
    function R2L_Conversion() {
        var tepm2 = parseFloat(document.getElementById("num2").value);
        // Fahrenheit to Celsius Right 2 Left ==>>
        if ((unitValue2 == "Fahrenheit") && (unitValue1 == "Celsius")) {
            RfahToCel(tepm2);
        }

        // Fahrenheit To Kelvi Right 2 Left  ====>>>
        if ((unitValue2 == "Fahrenheit") && (unitValue1 == "Kelvin")) {
            RfahToKel(tepm2);
        }

        // Fahrenheit To Rankine Right 2 Left ====>>>
        if ((unitValue2 == "Fahrenheit") && (unitValue1 == "Rankine")) {
            RfahToRan(tepm2);
        }

        // Celsius To Fahrenheit  Right 2 Left  ====>>>>
        if ((unitValue2 == "Celsius") && (unitValue1 == "Fahrenheit")) {
            RcelToFah(tepm2);
        }
        // Celsius To Kelvin  Right 2 Left  ====>>>>
        if ((unitValue2 == "Celsius") && (unitValue1 == "Kelvin")) {
            RcelToKel(tepm2);
        }
        // Celsius To Rankine  Right 2 Left  ====>>>>
        if ((unitValue2 == "Celsius") && (unitValue1 == "Rankine")) {
            RcelToRan(tepm2);
        }
        // Kelvin To Fahrenheit  Right 2 Left ====>>>
        if ((unitValue2 == "Kelvin") && (unitValue1 == "Fahrenheit")) {
            RkelToFah(tepm2);
        }
        // Kelvin To Celsius Right 2 Left  ====>>>
        if ((unitValue2 == "Kelvin") && (unitValue1 == "Celsius")) {
            RkelToCel(tepm2);
        }
        // Kelvin To Rankine  Right 2 Left ====>>>
        if ((unitValue2 == "Kelvin") && (unitValue1 == "Rankine")) {
            RkelToRan(tepm2);
        }

        // Rankine To Fahreheit  Right 2 Left ===>>>
        if ((unitValue2 == "Rankine") && (unitValue1 == "Farenheit")) {
            RranToFah(tepm2);
        }
        // Rankine To Celsius  Right 2 Left ===>>>
        if ((unitValue1 == "Rankine") && (unitValue1 == "Celsius")) {
            RranToCel(tepm2);
        }
        // Rankine To Kelvin  Right 2 Left ===>>>
        if ((unitValue2 == "Rankine") && (unitValue1 == "Kelvin")) {
            RranToKel(tepm2);
        }
    }


    document.getElementById("R2L").addEventListener("click", R2L_Conversion);






    // for unit value
    test();

    // --------- Card --------- 

    function card(x) {
        let CardValue = document.getElementsByClassName("result-card")[0];
        CardValue.style.transform = "translateY(-108px)";
        CardValue.style.backgroundColor = "red";
        CardValue.innerHTML = x;
        setTimeout(() => {
            CardValue.style.transform = "translate(0)";
            CardValue.style.backgroundColor = "green";
            CardValue.innerHTML = "";
        }, 3000)
    }



}
store();