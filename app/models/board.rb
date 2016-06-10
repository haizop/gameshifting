# == Schema Information
#
# Table name: boards
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_setup :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Board < ActiveRecord::Base
  has_many :board_panels, dependent: :destroy
  has_many :panels, through: :board_panels

  validates :name, :default_setup, presence: true
end
