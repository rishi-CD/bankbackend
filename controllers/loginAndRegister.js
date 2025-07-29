import pool from '../configs/dbconfig.js';

export const register = async (req, res) => {
    console.log("Registering user...",req.body);
    const {customerName, bankName, type, password,confirmPassword } = req.body;
    console.log("Received registration data:", customerName , bankName, type, password, confirmPassword);
    try {
        const response = await pool.query(`INSERT INTO users (customer_name, bank_name, type, password, confirm_password)
             VALUES ($1, $2, $3, $4, $5) RETURNING customer_id`,[customerName, bankName, type, password, confirmPassword]
        );
        const newCustomerId = response.rows[0].customer_id;
        console.log('User registered successfully. ID:', newCustomerId);
        res.status(200).json({ 
            success: true,
            message: 'User registered successfully',
            customerId: newCustomerId 
        }); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { customerId } = req.params;
        const result = await pool.query(
            'SELECT * FROM users WHERE customer_id = $1',
            [customerId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No accounts found' });
        } 
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to fetch accounts' });
    }
};

