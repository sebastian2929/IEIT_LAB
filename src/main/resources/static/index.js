document.addEventListener('DOMContentLoaded', async () => {
    const ownerNameParagraph = document.getElementById('ownerName');

    // Asegúrate de que el elemento con ID 'ownerName' exista
    if (ownerNameParagraph) {
        try {
            const response = await fetch('/api/name');
            if (!response.ok) throw new Error('Failed to fetch name.');

            const ownerName = await response.text();
            ownerNameParagraph.textContent = `${ownerName}`;
        } catch (error) {
            console.error('Error fetching name:', error);
            ownerNameParagraph.textContent = 'Error fetching owner name.';
        }
    } else {
        console.error('Element with ID "ownerName" not found.');
    }
});
