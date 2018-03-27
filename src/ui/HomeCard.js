import React from 'react';

const HomeCard = (props) => (
    //retirado  style={{width: '20rem'}}
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card">
            <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px', heigt: '100px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8ZlsNwx+cNZIgAk8GAvdkAkcBGo8oZmMWq0+V8zOllxObh8voAXYMAjr+82+pVq88Tfab3/P6jzuJptNQUf6jq9vt/rcN+prsvn8i14fKq3PCg2O6V1O2MxNzJ6PWZx95StNnS6PLC5fRYuNtFrNPH4e1ksNGn0OPX6vKCvtl/ssu21ucXjLfk8fZZwOS/ZBGfAAAEwklEQVR4nO3ca1uiQByHYdkAIVsgJVp2W1O3TMny+3+7ZVDJw3CYGQ7zt9/zsguVO3BwxmgwQAghhJD2jQvqe7+a63bEbXs9xKcf3EYQ0glC+kFIPwjpByH9IKQfhPQjLoz4HW9CW3i35c9uj4nEhSP+3n8v4R8ItQ5CFoR6ByELQr2DkAWh3kHI+r7CqPBZdQpCFoR6V0tYYxt9qyP8DaHWQciCUO++r/DuaBsI9Q5CFoR6ByFLSDherNx1RztfqyaFKS50bM+2vVgjY1PCtWsNU5xpZJnepmtIYQ0IP/0kw+11uzxtjqKKcJzipoGRnpYnuN1RDAR24vlWtacWhKOX18Dk4vYHUWCkfebvhEB/1YT/zrd5eY0d0zSLcFn2kqjwZZ7hymx7oU9PuJ2/1sPREz6PRvPXuLaNmjDyp8MUJ8ajIoyWs8ApGS5pC91JyL/QXYMwGy5t25bG6SWMTp58Ox8KDJfEhGy4FB9P8i5+LVoJ0w9gscxwecCl0yUjCM4erosw8tmRkz8vzXRSMZz6n4PB7Ox9q4EwWk7eHE9+tExxXmy56/23+XoJx4tJNhmXPy892wkni+Pn1EfIJuOeCs72zLfZ8uLvMLQQfm4SVZwTTH3+xE9FuFAWPmWTcfN8pUFI53nDhI0oRfUoZNcCW+EDmM2GS6tyhbAn4X4yLmnbnZfpiFLnj586F45qT8ZLcOmIUnu1pVPhi9BknFM6XBaOKH0Lt+KT8cviTcmI0qNQ8aOzke+h0FJnR0I2XBryH513bzrLURJO2hLucOojSjpc5j/SR6g6XLLLeDDNL+OHJ9JDqDpcZrOexD0ZUbQRbhVHFHbknHB1eRnXQSixMHuGy990nHoWKg+XZuVlvD/h81xtuNy/6Sov470Id5NxBRybGMThqtYXsl0Lx+uVFafzVemF2f3EoOBN169wvN4kscIySnZeOoHAxKBT4TJ0TBVcto9W2Wy8Z2HoKX5fwPJkdrEj4Zukz2aLl3EulLojKRcOWxS6njiOjShxttQQHl5ETWi0KYwNobLFy68RhYAwEjiE7DIenK7vWYd91ELo8rZa1BNml3HO+t6XUGIkPTqBWhQuK4Wl63vUhbtF9bLLOGVh9aI6i6iw5qI6i55QZFGdRU1oCi2qs6gJxV+HmFDi0yGEFXUitK9d6ENY3vULE7tHoduFcNqncNOt8K5648tICRfVG18GYXkQ7oKwoi+h1K1xuTCWebQvLDScgNuwOCd/bFyyVfXDnSSxvkrC8g77dQqsI2RfGfIy2u/0Be3yCnaLLzw/lykHIf0gpB+E9IOQfhDSD0L68YXna46Ug5B+ENIPQvpBKJvTRE0A2xI6H/fqfTRCbEt4f6Pcz4cmgDoLb9oUTiGEEEIIIYQQwgaEDxBCCCGEFUJL9U9JIIQQQgghhBBCCCGEsAFheE3CCVeox9yimW9mZhBCCCGEEEIIIYQQFqW9UPnmQt2F5/+X4PqE0TUJVzyh+htRH2HB/eTKB1EfocEFDga+xD+/1FLocRcxWDM1oi5CzyoCsjvW8xvAJXr4qd69/Msfbm/3+MPMIff4fn/B3n8V9HgR50ePj+8shdfPmgn8s3KEEEIIIYQQQgghhBBCiFT/AR2dGVJjri8SAAAAAElFTkSuQmCC" alt="Card image cap" />
            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
            </div>
        </div>
    </div>

);

export default HomeCard;