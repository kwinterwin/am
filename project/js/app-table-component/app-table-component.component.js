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
                const pageCount = Math.ceil(Number(this.listTotals) / this.pageDataCount);
                this.pageArray = getPageArray(pageCount);
                this.presentPage = this.pageArray[0];
            });

            this.tableColumns = {
                "Name": {
                    header: "Name",
                    key: "Name",
                    nextSortAction: "asc",
                    type: "string"
                },
                "Type": {
                    header: "Type",
                    key: "Type",
                    nextSortAction: "asc",
                    type: "string"
                },
                "CreatedByUserName": {
                    header: "Created By",
                    key: "CreatedByUserName",
                    nextSortAction: "asc",
                    type: "string"
                },
                "CreatedOn": {
                    header: "Created On",
                    key: "CreatedOn",
                    nextSortAction: "asc",
                    type: "date"
                }
            };

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
            };

            this.switchPage = function (obj) {
                this.presentPage = obj.pageNumber;
                dataService.getData({ totalCount: this.listTotals, startIndex: (this.presentPage - 1) * this.pageDataCount + 1 }).then((response) => {
                    const dataProperty = this.color + "listData";
                    this.tablesData = response.data[dataProperty];
                });
            };

            this.getPageInfo = function () {
                const lastPageItemIndex = this.presentPage * this.pageDataCount;
                return (lastPageItemIndex - this.pageDataCount + 1) + "-" + (lastPageItemIndex > this.listTotals ? this.listTotals : lastPageItemIndex) + " of " + this.listTotals;
            };

            this.sort = function (obj) {
                const columnInformation = obj.column;
                if (columnInformation.type === "string") {
                    this.tablesData.sort((a, b) => { return stringComparator.bind(null, a, b, columnInformation.key)() });
                    if (columnInformation.nextSortAction === "desc") {
                        this.tablesData.reverse();
                    }
                }
                else {
                    this.tablesData.sort((a, b) => {
                        return dateComparator.bind(null, Number(a[columnInformation.key].match(millisecondsRegexp)[0]),
                            Number(b[columnInformation.key].match(millisecondsRegexp)[0]), columnInformation.nextSortAction)()
                    });
                }
                if (columnInformation.nextSortAction === "asc") {
                    this.tableColumns[columnInformation.key].nextSortAction = "desc";
                }
                else {
                    this.tableColumns[columnInformation.key].nextSortAction = "asc";
                }
            };

            const stringComparator = (prev, next, key) => {
                if (prev[key] < next[key]) return -1;
                if (prev[key] < next[key]) return 1;
            };

            const dateComparator = (a, b, nextSortAction) => {
                if (nextSortAction === "asc") {
                    return a - b;
                }
                else {
                    return b - a;
                }
            }
        },
        bindings: {
            color: "=",
            types: "="
        }
    });