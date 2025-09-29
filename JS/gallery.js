const classes = ["S-Class", "A-Class", "B-Class", "C-Class", "D-Class"];

let currentClassIndex = 0;

const carImages = {
    "S-Class": [
        { src: "../Assets/Sclass1.webp", name: "Koenigsegg Jesko" },
        { src: "../Assets/Sclass2.webp", name: "Buggati Bolide" },
        { src: "../Assets/Sclass3.webp", name: "Lamborghini Egoista" },
        { src: "../Assets/Sclass4.webp", name: "McLaren Senna" }
    ],
    "A-Class": [
        { src: "../Assets/Aclass1.webp", name: "Pagani Zonda R" },
        { src: "../Assets/Aclass2.webp", name: "Ferrari LaFerrari Aperta" },
        { src: "../Assets/Aclass3.webp", name: "Aston Martin Victor" },
        { src: "../Assets/Aclass4.webp", name: "Porsche 918 Spyder" }
    ],
    "B-Class": [
        { src: "../Assets/Bclass1.webp", name: "Apollo IE" },
        { src: "../Assets/Bclass2.webp", name: "Chevrolet Corvette Grand Sport" },
        { src: "../Assets/Bclass3.webp", name: "Ford GT" },
        { src: "../Assets/Bclass4.webp", name: "Nissan GTR-50 Italdesign" }
    ],
    "C-Class": [
        { src: "../Assets/Cclass1.webp", name: "BMW M4 GTS" },
        { src: "../Assets/Cclass2.webp", name: "Dodge Viper ACR" },
        { src: "../Assets/Cclass3.webp", name: "Acura NSX GT3 Evo" },
        { src: "../Assets/Cclass4.webp", name: "Maserati Alfieri" }
    ],
    "D-Class": [
        { src: "../Assets/Dclass1.webp", name: "Nissan Leaf Nismo RC" },
        { src: "../Assets/Dclass2.webp", name: "Infiniti Project Black S" },
        { src: "../Assets/Dclass3.webp", name: "Lotus Emira" },
        { src: "../Assets/Dclass4.webp", name: "Honda Civic Type R" }
    ]
};

function changeClass(direction) {
    currentClassIndex = (currentClassIndex + direction + classes.length) % classes.length;
    updateGallery();
}

function updateGallery() {
    const classLabel = classes[currentClassIndex];
    document.getElementById("tierLabel").textContent = classLabel;
    const carGrid = document.getElementById("carGrid");
    carGrid.innerHTML = "";
    carImages[classLabel].forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-image");
        const img = document.createElement("img");
        img.src = car.src;
        const carName = document.createElement("div");
        carName.classList.add("car-name");
        carName.textContent = car.name;
        carDiv.appendChild(img);
        carDiv.appendChild(carName);
        carGrid.appendChild(carDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateGallery();
});
