<template>
    <div>
        <ul class="shopping_cart_form">
            <div class="shopping_cart_cell" v-for="(item,index) in items" :key="index">
                <div class="shopping_cart_cell_bg">
                    <!--已购商品内容区域-->
                    <div class="shopping_cart_cell_contentDiv" :animation="item.animation" @click="cancelDelete">
                        <img :src="item.imgUrl"/>
                        <div class="shopping_cart_cell_info">
                            <div style="width: 169px;font-size: 13px;color: #666666;line-height: 18px">{{item.title}}
                            </div>
                            <div style="width: 169px;font-size: 13px;color: #999999;margin-top: 4px;line-height: 18px">
                                {{item.ska}}
                            </div>
                            <div style="width: 169px;font-size: 16px;color: #333333;margin-top: 10px;line-height: 18px">
                                {{item.currentPrice}}
                            </div>
                            <div style="width: 169px;font-size: 13px;color: #999999;margin-top: 5px;line-height: 15px">
                                {{item.price}}
                            </div>
                        </div>
                        <div class="shopping_cart_cell_counters">
                            <img :src="icon.back"
                                 style="height: 15px;width: 15px;margin-left: 78px;background-color: #ffffff;"
                                 @click.stop="showDeleteIcon(item,index)"
                                 v-if="currentIndex!=index"/>
                            <div style="height: 15px;width: 15px;margin-left: 78px;background-color: #ffffff;"
                                 v-if="currentIndex==index"></div>
                            <counter style="height: 24px;width:88px;"/>

                        </div>
                    </div>
                    <!--删除图标-->
                    <img :src="icon.delete" class="shopping_cart_cell_bg_delete"
                         @click="deleteItem(item,index)"/>
                </div>
                <div class="space-line"></div>
            </div>
        </ul>
        <div class="shopping_cart_settlement">
            <p style="font-size: 12px;color: #666666;">共{{quality}}件商品 合计<span
                style="font-size: 16px;font-family:HelveticaNeue-Bold;color: #333333"> ${{totalPrice}}</span></p>
            <div @click="settlement">结算</div>
        </div>
    </div>
</template>

<script>
    import counter from '../../components/quantity-select';

    export default {
        name: "shopping_cart",
        data() {
            return {
                icon: {
                    back: './../../static/assets/Black.png',
                    delete: './../../static/assets/delete.png',
                },
                currentIndex: '999',     //当前选中的第几项，999代表未选中
                items:[],
                // items: [{
                //     title: "丽丽 | 全棉印花不对称T恤",
                //     ska: "白色/M",
                //     currentPrice: "24.00",
                //     price: "64.00",
                //     imgUrl: "",
                //     animation: '',
                // }, {
                //     title: "丽丽 | 全棉印花不对称T恤",
                //     ska: "白色/M",
                //     currentPrice: "24.00",
                //     price: "64.00",
                //     imgUrl: "",
                //     animation: '',
                // }, {
                //     title: "丽丽 | 全棉印花不对称T恤",
                //     ska: "白色/M",
                //     currentPrice: "24.00",
                //     price: "64.00",
                //     imgUrl: "",
                //     animation: '',
                // },],
                quality: '3',
                totalPrice: '24',
            };
        },
        components: {counter},
        methods: {
            showDeleteIcon(item, index) {
                console.log(item, index)
                if (this.currentIndex != '999') {
                    this.animation.translateX(0).step();
                    this.items[this.currentIndex].animation = this.animation.export();
                }

                this.currentIndex = index;
                this.animation.translateX(-88).step();
                this.items[index].animation = this.animation.export();
            },
            deleteItem(item, index) {
                console.log(item, index)
            },
            cancelDelete() {
                if (this.currentIndex != '999') {
                    this.animation.translateX(0).step();
                    this.items[this.currentIndex].animation = this.animation.export();
                    this.currentIndex = '999';
                }
            },
            settlement() {
                console.log('结算')
            },
            getShoppingCartData(){
                let _this = this;
                _this.$http.get('/mock/16/api/store/shopping_cart').then(res=>{
                    _this.items = res.data.items;
                })
            }

        },
        mounted() {
            this.animation = wx.createAnimation({
                // 动画持续时间，单位ms，默认值 400
                duration: 400,
                /**
                 * http://cubic-bezier.com/#0,0,.58,1
                 *  linear  动画一直较为均匀
                 *  ease    从匀速到加速在到匀速
                 *  ease-in 缓慢到匀速
                 *  ease-in-out 从缓慢到匀速再到缓慢
                 *
                 *  http://www.tuicool.com/articles/neqMVr
                 *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
                 *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
                 */
                timingFunction: 'linear',
                // 延迟多长时间开始
                delay: 100,
                /**
                 * 以什么为基点做动画  效果自己演示
                 * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
                 * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
                 */
                transformOrigin: 'left top 0',
                success: function (res) {
                    console.log(res)
                }
            });
            this.getShoppingCartData();
        },

    }
</script>

<style scoped>
    page {
        background-color: #f6f6f6;
    }

    .shopping_cart_form {
        margin-top: 10px;
        margin-bottom: 48px;
    }

    .shopping_cart_cell {
        height: 120px;
        width: 100%;
        background-color: #ffffff;
    }

    .shopping_cart_cell_bg {
        height: 119px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .shopping_cart_cell_bg_delete {
        z-index: 10;
        position: absolute;
        right: 14px;
        height: 48px;
        width: 48px;
        border-radius: 24px;
        background-color: red;
    }

    .shopping_cart_cell_contentDiv {
        z-index: 999;
        height: 119px;
        width: 100%;
        /*margin-left: -78px;*/
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .shopping_cart_cell_contentDiv_change {
        z-index: 999;
        height: 119px;
        width: 100%;
        margin-left: -88px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .shopping_cart_cell_contentDiv img {
        height: 88px;
        width: 70px;
        background-color: #eeeeee;
        margin-left: 16px;
    }

    .shopping_cart_cell_info {
        margin-left: 16px;
        width: 169px;
        height: 88px;
        display: flex;
        flex-direction: column;
    }

    .shopping_cart_cell_counters {
        height: 88px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .space-line {
        height: 1px;
        width: 100%;
        background-color: #e5e5e5;
    }

    .shopping_cart_settlement {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 48px;
        background-color: #ffffff;
        z-index: 9999;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .shopping_cart_settlement div {
        width: 104px;
        height: 48px;
        background-color: #CD0E00;
        color: white;
        margin-left: 12px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
