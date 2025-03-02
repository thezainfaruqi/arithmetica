document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display")
    const button = document.querySelectorAll(".btn") // .btn is class

    button.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent
            
            if (value === "AC") {
                display.value = ""
            } else if (value === "Del") {
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    if (display.value.includes("/0")) {
                        display.value = "You silly goose";
                    } else {
                        display.value = eval(display.value); 
                    }
                } catch {
                    display.value = "Error"; 
                }
            } else {
                display.value += value; 
            }
        });
    });
        
        document.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                display.value = display.value.slice(0, -1); 
            }
        });
});


