<template>
    <div>
        <div class="daily_new_header">
            <p>每日上新</p>
            <span>每日早上10:00准点上新</span>
        </div>
        <div class="daily_bargain_header">
            <p class="daily_bargain_header_date">07<span>日</span></p>
            <p class="daily_bargain_header_title">今日超值新品</p>
        </div>
        <div class="daily_bargain_form">
            <bargain v-for="(dailyNewItem,index) in dailyNewItems" :key="index" :listItem="dailyNewItem"/>
        </div>

        <div>
            <div class="daily_bargain" v-for="(bargainItem,index1) in newProductItems" :key="index1">
                <div class="daily_bargain_header">
                    <p class="daily_bargain_header_date">{{bargainItem.date}}<span>日</span></p>
                    <p class="daily_bargain_header_title">新秀优选</p>
                </div>
                <div class="new_product_form">
                    <new-product setClass="new_product_card" :listItem="item" v-for="(item,index2) in bargainItem.items"
                                 :key="index2"/>
                </div>
            </div>
        </div>
        <!--<div>-->
        <!--<div class="daily_bargain_header">-->
        <!--<p class="daily_bargain_header_date">06<span>日</span></p>-->
        <!--<p class="daily_bargain_header_title">新秀优选</p>-->
        <!--</div>-->
        <!--<div class="new_product_form">-->
        <!--<new-product setClass="new_product_card" :listItem="item" v-for="(item,index) in newProductItems"-->
        <!--:key="index"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div>-->
        <!--<div class="daily_bargain_header">-->
        <!--<p class="daily_bargain_header_date">06<span>日</span></p>-->
        <!--<p class="daily_bargain_header_title">新秀优选</p>-->
        <!--</div>-->
        <!--<div class="new_product_form">-->
        <!--<new-product setClass="new_product_card" :listItem="item" v-for="(item,index) in newProductItems"-->
        <!--:key="index"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div>-->
        <!--<div class="daily_bargain_header">-->
        <!--<p class="daily_bargain_header_date">06<span>日</span></p>-->
        <!--<p class="daily_bargain_header_title">新秀优选</p>-->
        <!--</div>-->
        <!--<div class="new_product_form">-->
        <!--<new-product setClass="new_product_card" :listItem="item" v-for="(item,index) in newProductItems"-->
        <!--:key="index"/>-->
        <!--</div>-->
        <!--</div>-->

    </div>
</template>

<script>
    import bargain from '../../components/daily-bargain-card/daily-bargain-card';
    import newProduct from '../../components/new-production-card/new-production-card';

    export default {
        components: {bargain, newProduct},
        data() {
            return {
                index: true,
                dailyNewItems:[],
                newProductItems:[],
                // dailyNewItems: [
                //     {
                //         title: '羚羊早安 | 春夏薄款民国范斑点纯色亲肤女士丝巾dgkjfhsdjkfhsdjfgsjhdfgjhsdf',
                //         price: '29.99',
                //         imgUrl: '',
                //         salePrice: '14.99'
                //     },
                //     {
                //         title: '羚羊早安 | 春夏薄款民国范斑点纯色亲肤女士丝巾',
                //         price: '29.99',
                //         imgUrl: '',
                //         salePrice: '14.99'
                //     },
                //     {
                //         title: '羚羊早安 | 春夏薄款民国范斑点纯色亲肤女士丝巾',
                //         price: '29.99',
                //         imgUrl: '',
                //         salePrice: '14.99'
                //     }],
                // newProductItems: [
                //     {
                //         date: "05",
                //         items: [
                //             {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }]
                //     },
                //     {
                //         date: "06",
                //         items: [
                //             {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }]
                //     },
                //     {
                //         date: "07",
                //         items: [
                //             {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }]
                //     },
                //     {
                //         date: "08",
                //         items: [
                //             {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }, {
                //                 imgUrl: '',
                //                 price: '33.33',
                //                 salePrice: '19.33'
                //             }]
                //     },
                // ],
            };
        },
        methods: {
            getDailyNewData() {
                let _this = this;
                _this.$http.get('/mock/16/api/store/daily_new').then(res => {
                    console.log(res)
                    _this.dailyNewItems = res.data.dailyNewItems;
                    _this.newProductItems = res.data.newProductItems;
                })
            }
        },
        created() {
            this.getDailyNewData();
        },

    }
</script>


<style>
    page {
        background-color: #f2f2f2;
        width: 100%;
    }

    .daily_new_header {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #4D4D4D;
    }

    .daily_new_header p {
        color: #E3E3E3;
        line-height: 45px;
        font-size: 38px;
        font-family: PingFangSC-Semibold;
    }

    .daily_new_header span {
        color: #E3E3E3;
        line-height: 45px;
        font-size: 18px;
        font-family: PingFangSC-Regular;
    }

    .daily_bargain_header {
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .daily_bargain_header_date {
        font-size: 37px;
        font-family: HelveticaNeue-Bold;
        line-height: 30px;
        /*margin-top: 16px;*/
    }

    .daily_bargain_header_date span {
        font-size: 12px;
    }

    .daily_bargain_header_title {
        font-size: 18px;
        color: #333333;
        line-height: 25px;
        display: flex;
        justify-content: center;
    }

    .daily_bargain_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .new_product_form {
        height: 222px;
        width: auto;
        padding-left: 16px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    .new_product_card {
        margin-right: 16px;
        display: inline-block;
    }
</style>
