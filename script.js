const dolPhin = document.getElementById('rowDolpin')
const contentDolphin = `<!-- col for card -->
<div class="col-xl-3 col-md-6 col-12 mt-4">
    <!-- card -->
    <div class="card p-2">
        <img src="https://images.unsplash.com/photo-1629178101830-369bb16d5684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="dolphin">
        <div class="card-body p-0 py-4">
          <h3 class="text-center pt-2" style="border-top: 1px solid gray;">Dolphin</h3>
          <p class="card-text text-center">Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin Dolphin</p>
        </div>
    </div>
</div>`

for (let i = 1; i < 17; i++) {
    dolPhin.innerHTML += contentDolphin
}