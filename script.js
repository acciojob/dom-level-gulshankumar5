 const element = document.querySelector("#level");
        let level = 0;
        let current = element.parentElement;

        while (current) {
            level++;
            current = current.parentElement;
        }

        alert("The level of the element is: " + level);