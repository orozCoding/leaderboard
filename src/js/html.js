const header = `
<h1 id="header-title">Leaderboard</h1>
`;

const main = `<div id="main-left" class="d-flex">
    <div id="title-left" class="d-flex row">
        <h2 id="title-left-text">Recent Scores</h2>
        <button type="button" id="title-left-button" class="click">Refresh</button>
    </div>
    <ul id="scores-board" class="d-flex">
        <li class="score">Name: 100</li>
        <li class="score">Name: 20</li>
        <li class="score">Name: 50</li>
        <li class="score">Name: 78</li>
        <li class="score">Name: 125</li>
        <li class="score">Name: 77</li>
        <li class="score">Name: 42</li>   
    </ul>
</div>
<div id="main-right" class="d-flex">
    <div id="title-right">
        <h2 id="title-right-text">Add your score</h2> 
    </div>
    <form action="submit" id="user-form" class="d-flex">
        <label for="name"></label>
        <input type="text" name="name" id="input-name" placeholder="Your name">
        <label for="score"></label>
        <input type="text" name="score" id="input-score" placeholder="Your score">
        <input type="button" value="submit" id="form-btn" class="click">
    </form>
</div>`;

export { header, main };