// Data for each step
const panelData = {
    1: {
        title: "Environment Preparation",
        images: ["image/SQL Server.png", "image/SSMS.png"],
        desc: "Technical setup showing SQL Server 2025 installation and the SSMS management console."
    },
    2: {
        title: "Extraction & Restoration",
        images: ["image/Contoso bak.png", "image/Restore in Server.png"],
        desc: "Resolution of security read-permissions and restoration of the proprietary .bak database."
    },
    3: {
        title: "Cross-Platform Migration",
        images: ["image/Data Migration.png"],
        desc: "The Workbench Migration Wizard workflow showing schema conversion and bulk data transfer."
    },
    4: {
        title: "Hybrid Cloud Connectivity",
        images: ["image/Ngrok running.png", "image/Ngrok.png", "image/User Authentication.png"],
        desc: "Step-by-step setup of the ngrok secure bridge and MySQL remote authentication overhaul."
    },
    5: {
        title: "Cloud Analytics Pipeline",
        images: ["image/Colab.png"],
        desc: "Google Colab integration displaying high-performance SQLAlchemy querying on 3.4M records."
    },
    6: {
        title: "Business Intelligence Integration",
        images: ["image/BI.png"],
        desc: "Connection between Power BI Desktop and the local database server (127.0.0.1:3306) to enable real-time visualization of the 3.4M migrated records."
    }
};

function openPanel(id) {
    const data = panelData[id];
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('overlay');
    const imageContainer = document.getElementById('panel-image-container');
    const placeholder = document.getElementById('image-placeholder');

    document.getElementById('panel-title').innerText = data.title;
    document.getElementById('panel-desc').innerText = data.desc;

    // Clear previous images
    imageContainer.innerHTML = '';

    if (data.images && data.images.length > 0) {
        placeholder.classList.add('hidden');
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = "w-full rounded-xl border border-slate-200 shadow-sm object-contain bg-slate-100";
            img.alt = "Technical Screenshot";
            img.onclick = () => window.open(imgSrc, '_blank');
            img.title = "Click to view full size";
            img.style.cursor = "zoom-in";
            imageContainer.appendChild(img);
        });
    } else {
        placeholder.classList.remove('hidden');
    }

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('overlay');
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}
