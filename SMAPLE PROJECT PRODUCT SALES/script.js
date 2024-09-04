document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const customerName = document.getElementById('customerName').value;
    
    // Example data - replace with your actual data source
    const customers = {
        'John Doe': {
            age: 30,
            email: 'john.doe@example.com',
            address: '123 Main St, Anytown, USA'
        },
        'Jane Smith': {
            age: 25,
            email: 'jane.smith@example.com',
            address: '456 Oak St, Sometown, USA'
        }
    };
    
    const customerDetailsDiv = document.getElementById('customerDetails');
    customerDetailsDiv.innerHTML = '';
    
    if (customers[customerName]) {
        const customer = customers[customerName];
        customerDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Age:</strong> ${customer.age}</p>
            <p><strong>Email:</strong> ${customer.email}</p>
            <p><strong>Address:</strong> ${customer.address}</p>
        `;
    } else {
        customerDetailsDiv.innerHTML = `<p>Customer not found.</p>`;
    }
});
