const main = `<div id="main-left" class="d-flex">
    <div id="title-left" class="d-flex row">
        <h2 id="title-left-text">Recent Scores</h2>
        <button type="button" id="title-left-button" class="click">Refresh</button>
    </div>
    <ul id="scores-board" class="d-flex"> 
    </ul>
</div>
<div id="main-right" class="d-flex">
    <div id="title-right">
        <h2 id="title-right-text">Add your score</h2> 
    </div>
    <form action="" id="user-form" class="d-flex">
        <label for="name"></label>
        <input type="text" name="name" id="input-name" placeholder="Your name">
        <label for="score"></label>
        <input type="number" name="score" id="input-score" placeholder="Your score">
        <input type="submit" value="submit" id="form-btn" class="click">
        <span id="form-alert"></span>
    </form>
</div>`;

export default main;