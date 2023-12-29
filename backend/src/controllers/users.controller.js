import * as userService from '../services/users.service.js';
import { UserNotFound } from '../utils/custom-exceptions.utils.js';

const register = async (req, res) => {
    try {
        const result = await userService.register({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const login = async (req, res) => {
    try {
        const result = await userService.login({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const current = async (req, res) => {
    const {user} = req.user;
    try {
        const result = await userService.current(user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateUser = async (req, res) => {
    try {
        const result = await userService.updateUser({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const recoverPassword = async (req, res) => {
    try {
        const result = await userService.recoverPassword({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const interPass = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.interPass(id);
        res.redirect(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPassword = async (req, res) => {
    try {
        const result = await userService.newPassword({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { register, login, current, updateUser, getById, recoverPassword, interPass, newPassword };