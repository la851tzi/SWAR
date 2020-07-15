import React, {Component} from "react";
import Layout from "./Layout";
import './CSS/Articles.css';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleName: "",
            articleText: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmitState() {
        const { articleName, articleText} = this.state
        this.props.addArticles(articleName, articleText)
    }

    handleSubmit() {
        let articles;
        const { articleName, articleText} = this.state
        this.props.addArticles(articleName, articleText)
        //because state is gone after switching route
        let article = {
            articleName: articleName,
            articleText: articleText
        }
        if (localStorage.getItem("articles") === null) {
            articles = [];
            articles[0] = article
            localStorage.setItem("articles", JSON.stringify(articles))
        } else {
            articles = JSON.parse(localStorage.getItem("articles"))
            let articlesNew = [
                ...articles,
                article
            ]
            localStorage.setItem("articles", JSON.stringify(articlesNew))
        }
    }

    deleteArticleState(index) {
        let articles = [...this.state.articles]
        articles.splice(index, 1);
        this.setState({articles: articles});
    }

    deleteArticle(index) {
        let articles = JSON.parse(localStorage.getItem("articles"))
        articles.splice(index, 1);
        localStorage.setItem("articles", JSON.stringify(articles))
        window.location.reload();
    }

    render() {
        return (
            <Layout>
                <p className={'Articles_header'}>Articles:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Article name
                        <input type="text" name="articleName" value={this.state.articleName} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Article text
                        <textarea type="text" name="articleText" value={this.state.articleText} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Post article" />
                </form>
                {
                    //this.props.articles.map((articles, index) => {
                    JSON.parse(localStorage.getItem("articles")).map((article, index) => {
                        return (
                            <div key={index}>
                                {article.articleName}
                                <br/>
                                {article.articleText}
                                <br/>
                                <button onClick={(index) => this.deleteArticle()}>Delete Article</button>
                            </div>
                        );
                    }
                )}
            </Layout>
        );
    }
}
export default Articles;
