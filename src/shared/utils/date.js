export default function formatDate(date) {
  return new Date(date).toLocaleDateString('el-GR', { year: 'numeric', month: 'numeric', day: 'numeric' });
}
