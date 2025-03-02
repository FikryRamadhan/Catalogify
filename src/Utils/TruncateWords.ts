/**
 * Memotong teks menjadi maksimal "limit" kata
 * dan menambahkan "..." jika jumlah kata melebihi limit.
 *
 * @param {string} text - Teks asli
 * @param {number} limit - Batas jumlah kata
 * @returns {string} - Teks yang sudah dipotong
 */
const truncateWords = (text, limit = 10) => {
    // Pisahkan teks menjadi array kata berdasarkan spasi
    if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + '...';
}

export default truncateWords
  