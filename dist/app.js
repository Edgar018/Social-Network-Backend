"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const path_1 = __importDefault(require("path"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const special_routes_1 = __importDefault(require("./routes/special.routes"));
const post_route_1 = __importDefault(require("./routes/post.route"));
const like_route_1 = __importDefault(require("./routes/like.route"));
const dislike_route_1 = __importDefault(require("./routes/dislike.route"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
app.get('/', (req, res) => {
    res.send(`Welcome to my API`);
});
app.use(auth_routes_1.default);
app.use(special_routes_1.default);
app.use(post_route_1.default);
app.use(like_route_1.default);
app.use(dislike_route_1.default);
app.use(express_1.default.static(path_1.default.resolve('public/uploads')));
exports.default = app;
