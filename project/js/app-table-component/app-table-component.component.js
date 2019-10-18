angular
    .module("appTableComponent", [])
    .component("appTableComponent", {
        templateUrl: "./js/app-table-component/app-table-component.template.html",
        controller: function atc(dataService, $scope) {
            dataService.getData().then((response) => {
                const dataProperty = this.color + "listData";
                this.tablesData = response.data[dataProperty];
                this.listTotals = response.data[this.color + "listTotals"];
                this.pageDataCount = this.tablesData.length;
                this.pageCount = Math.ceil(Number(this.listTotals) / this.pageDataCount);
                this.pageArray = getPageArray(this.pageCount);
                this.presentPage = this.pageArray[0];
            });

            const millisecondsRegexp = /\d+/gi;

            const getPageArray = function (count) {
                const array = [];
                for (let i = 1; i <= count; i++) {
                    array.push(i);
                }
                return array;
            }

            this.setCreatedOnDate = (stringDate) => {
                const date = new Date(Number(stringDate.match(millisecondsRegexp)[0]));
                return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/"
                    + date.getUTCDate() + " " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();

                // TODO: added date format like page.jpg
            };

            this.switchPage = function(obj){
                this.presentPage = obj.pageNumber;
            };

            this.getPageInfo = function () {
                const lastPageItemIndex = this.presentPage * this.pageDataCount;
                return (lastPageItemIndex - this.pageDataCount + 1) + "-" + (lastPageItemIndex > this.listTotals ? this.listTotals : lastPageItemIndex) + " of " + this.listTotals;
            };

            this.nextSortAction = "asc";

            this.sortDateColumn = () => {
                if (this.nextSortAction === "asc") {
                    this.nextSortAction = "desc";
                    this.tablesData.sort((a, b) => {
                        const aCreatedOn = Number(a.CreatedOn.match(millisecondsRegexp)[0]);
                        const bCreatedOn = Number(b.CreatedOn.match(millisecondsRegexp)[0]);
                        return aCreatedOn - bCreatedOn;
                    });
                }
                else {
                    this.nextSortAction = "asc";
                    this.tablesData.sort((a, b) => {
                        const aCreatedOn = Number(a.CreatedOn.match(millisecondsRegexp)[0]);
                        const bCreatedOn = Number(b.CreatedOn.match(millisecondsRegexp)[0]);
                        return bCreatedOn - aCreatedOn;
                    });
                }
            }
        },
        bindings: {
            color: "=",
            types: "="
        }
    });