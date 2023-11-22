 // Function to check attendance
        function checkAttendance() {
            // Get the entered email
            var enteredEmail = document.getElementById('emailInput').value;

            // Retrieve the list of members from local storage
            var savedMembers = JSON.parse(localStorage.getItem('attendanceList')) || [];

            // Check if the array is not empty
            if (savedMembers.length > 0) {
                // Check if the entered email is in the list
                var memberIndex = savedMembers.findIndex(member => member.email === enteredEmail);

                if (memberIndex !== -1) {
                    // Member is found, mark as present
                    savedMembers[memberIndex].present = true;
                    alert('Attendance marked: Present');
                } else {
                    // Member not found, add to the list
                    alert('Not a member!');
                }

                // Save the updated list to local storage
                localStorage.setItem('attendanceList', JSON.stringify(savedMembers));
            } else {
                // Array is empty, show an alert or handle as needed
                alert('Attendance list is empty. Add members first.');
            }
        }

        // Function to initialize local storage with an empty array
        function initializeLocalStorage() {
            var savedMembers = JSON.parse(localStorage.getItem('attendanceList'));

            if (!Array.isArray(savedMembers) || savedMembers.length === 0) {
                // If the array doesn't exist or is empty, create and save an empty array
                localStorage.setItem('attendanceList', JSON.stringify([
                    { email: 'y@gmail.com', present: false },
                    { email: 'm@gmail.com', present: false }
                ]));
            }
        }

        // Call the initialize function when the page loads
        initializeLocalStorage();

        //show Present members
        function showPresent() {
            var divPresentMember = document.getElementById('showPresent');
            var savedMembers = JSON.parse(localStorage.getItem('attendanceList'));
            savedMembers.map(member => {
                if(member.present == true){
                const emailElement = document.createElement('div');
                emailElement.textContent = member.email;
                divPresentMember.appendChild(emailElement);
            }
            })
             
        }