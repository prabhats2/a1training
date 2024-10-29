document.write(`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<div class="container my-4 search-container">
    <input type="text" id="searchBar" class="search-bar form-control" 
           placeholder="Search Courses..." onkeyup="filterItems()">
              
    <span onclick="startVoiceSearch()" id="voiceIcon" class="voice-icon">
        <i class="fa fa-microphone" id="micIcon"></i>
    </span>
</div>

<div id="noContentMessage" class="no-content-message" style="display: none;">
    <p>No content available at the moment.</p>
</div>

<ul id="myUL" style="list-style-type: none; padding: 0; margin-top: 20px; display: none;">
    <!-- List items here -->
    <li style="padding: 10px;">Course 1: JavaScript</li>
    <li style="padding: 10px;">Course 2: Docker Training</li>
    <li style="padding: 10px;">Course 3: Terraform</li>
    <!-- Add the rest of your courses -->
</ul>

<script>
    function filterItems() {
        const input = document.getElementById('searchBar');
        const filter = input.value.toUpperCase();
        const list = document.getElementById('myUL');
        const items = list.getElementsByTagName('li');
        let visibleCount = 0;

        // Show the list if there are items
        list.style.display = '';

        for (let i = 0; i < items.length; i++) {
            const txtValue = items[i].textContent || items[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
                visibleCount++;
            } else {
                items[i].style.display = "none";
            }
        }

        // Show no content message if no results are found
        const noContentMessage = document.getElementById('noContentMessage');
        if (visibleCount === 0) {
            noContentMessage.style.display = "block";
        } else {
            noContentMessage.style.display = "none";
        }
    }

    // Function to start voice recognition
    function startVoiceSearch() {
        const icon = document.getElementById('micIcon');
        icon.style.color = 'red';

        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = function (event) {
                let transcript = event.results[0][0].transcript.trim().replace(/\.$/, '');
                document.getElementById('searchBar').value = transcript;
                filterItems();  // Call the filter function after voice input
            };

            recognition.onerror = function () {
                console.error('Speech recognition error');
                icon.style.color = '#333';
            };

            recognition.onend = function () {
                icon.style.color = '#333';
            };
        } else {
            alert("Sorry, your browser doesn't support speech recognition.");
            icon.style.color = '#333';
        }
    }
</script>

<style>
    .search-container {
        position: relative;
        display: inline-block;
        width: 50%; /* Adjust width as needed */
    }

    .search-bar {
        width: 100%; /* Full width for the search bar */
        padding: 12px 40px 12px 20px;
        font-size: 16px;
        border-radius: 25px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .voice-icon {
        position: absolute;
        right: 29px; /* Adjust this for spacing from the right */
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    #micIcon {
        font-size: 20px;
        color: #333;
    }

    @media (max-width: 768px) {
        .search-container {
            width: 100%;
        }
    }

    #download {
        margin-left: 80pc;
        color: white;
        font-size: 25px;
        animation: pop 1.5s ease infinite;
    }

    /* Popping animation */
    @keyframes pop {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
</style>

    `)
   